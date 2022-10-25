// Letter of Credit Router 

// GET 
// @params 
// <loc_unique_num:int>
// 
// POST
// @params 
// <recipient:string> <bank:string> <address:string> <amount:string> <date:string>  
// <subject:string> <attention:string> <valid:string> <addressB:string>
// <uniqueId:int>
//
// DELETE
// @params 
// <param_list>
//
// PATCH
// @params 
// <param_list>

// UNIQUE 
// @id 
// <loc_unique_num:int>

// Roles : 
// (i) CRUD Operations 
// (ii) Synchronizes with  /pdf/loc to uniquely identity client

// STATUS CODES
// 200 - Success Operation
// 201 - Success Creation
// 404 - Not found
// 500 - Server Error

/*
 DOCUMENT STRUCTURE
 {
    uniqueId 
    recipient 
    bank 
    address
    amount
    date
    subject
    attention
    valid
    addressB 
  }

*/


const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./../../controller/db");
const util = require("./../../controller/utils");

const FILE_NAME = "loc.js";
const ROUTER_NAME = "locRouter";
const COLLECTION_NAME = "letter_of_credit";
const DATABASE_NAME = "SE_DATABASE";

const locRouter = express.Router();
locRouter.use(cors());
locRouter.use(bodyparser.json());

// Global Vars
let collClient; // Collection Client for <COLLECTION_NAME> Collection in <DATA_BASE>
let LAST_UNIQUE_ID = 0;

const callBack = (err) => {
    if (!err) {
        collClient = db.RetrieveDatabaseConnection().collection(COLLECTION_NAME, util.ROUTER_DEFAULTS);
        // util.DebugStream(FILE_NAME,"SUCCESS","Collection connection success",collClient.stats);
        util.DebugStream(FILE_NAME, "SUCCESS", "Collection connection success", "--STATS");
    } else {
        util.ErrorStream(FILE_NAME, "CONNECTION FAILED", "Collection connection failed", err);
    }
}

db.ConnectToDatabase(callBack, DATABASE_NAME);

locRouter.get("/:uniqueId", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET :unique", ROUTER_NAME);
    console.log(debugText);
    collClient.findOne({ uniqueId: req.params.uniqueId }).then(
        (value) => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data found with uniqueId"));
            res.status(200).json(value);
        }
    ).catch((err) => {
        console.log(util.ErrorStream(FILE_NAME, "RETRIVAL", "Data not found", err));
        res.status(404).json({ err: err });
    })

})

locRouter.get("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET", ROUTER_NAME);
    console.log(debugText);
    LAST_UNIQUE_ID = LAST_UNIQUE_ID + 1;
    res.status(200).json({ uniqueId: LAST_UNIQUE_ID });
});



// POST
// @params
// <uniqueId>
//
// condition : 
// must be called only after generating pdf

locRouter.post("/:uniqueId", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "POST", ROUTER_NAME);
    console.log(debugText);

    const id = req.params.uniqueId;
    const dataBody = req.body;

    const data = {
        uniqueId: id,
        recipient: dataBody.recipient,
        bank: dataBody.bank,
        address: dataBody.address,
        amount: dataBody.amount,
        date: dataBody.date,
        subject: dataBody.subject,
        attention: dataBody.attention,
        valid: dataBody.valid,
        addressB: dataBody.addressB
    }

    collClient.insertOne(data).then((value) => {
        console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data Inserted", value));
        res.status(201).json(value);
    }, (err) => {
        console.log(util.ErrorStream(FILE_NAME, "INSERTION", "Data not Inserted", err));
        res.status(500).json({ error: err });
    });
});

const OPTION_NOT_AVAILABLE = "Can't perform specific operation";

locRouter.patch("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "PATCH", ROUTER_NAME);
    console.log(debugText);
    res.send(OPTION_NOT_AVAILABLE);
})

locRouter.delete("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "DELETE", ROUTER_NAME);
    console.log(debugText);
    res.send(OPTION_NOT_AVAILABLE);
})

module.exports = locRouter;
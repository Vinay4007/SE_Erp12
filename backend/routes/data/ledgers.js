// Ledgers Router 

// GET 
// @params 
// <id:int>          ( ? Ledger data is unchanged)
// Unique retrival 
//
// GET 
// @params
// <HEFA_ID>
// All data          (!< Search query added)
//
// POST
// @params 
// 
// <id:int> <date:strung> <particular:string> <debit/credit:string> <accountno:string> <amount:int>
//
// DELETE
// @params 
// 
// !xx 
// 
// PATCH
// @params 
// !xx  
// ? Due to security issues , changing ledger details after uploading is restricted 
//
// UNIQUE 
// @id 
// <id:int>

// Roles : 
// (i) CRUD Operations 
// (ii) Manages the ledgers

// STATUS CODES
// 200 - Success Operation
// 201 - Success Creation
// 404 - Not found
// 500 - Server Error
// 403 - Forbidden Request

/*
 DOCUMENT STRUCTURE
  {
    id 
    date
    particular
    card
    accountno
    amount
  }

*/

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./../../controller/db");
const util = require("./../../controller/utils");

const FILE_NAME = "ledgers.js";
const ROUTER_NAME = "ledgerRouter";
const COLLECTION_NAME = "ledger";
const DATABASE_NAME = "SE_DATABASE";

const ledgerRouter = express.Router();
ledgerRouter.use(cors());
ledgerRouter.use(bodyparser.json());

// Global Vars
let collClient; // Collection Client for <COLLECTION_NAME> Collection in <DATA_BASE>

const callBack = (err) => {
    if (!err) {
        collClient = db.RetrieveDatabaseConnection().collection(COLLECTION_NAME, util.ROUTER_DEFAULTS);
        util.DebugStream(FILE_NAME, "SUCCESS", "Collection connection success", collClient.stats);
    } else {
        util.ErrorStream(FILE_NAME, "CONNECTION FAILED", "Collection connection failed", err);
    }
}

db.ConnectToDatabase(callBack, DATABASE_NAME);

ledgerRouter.get("/:id", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET :id", ROUTER_NAME);
    console.log(debugText);

    collClient.findOne({ id: req.params.id }).then(
        (value) => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data found with uniqueId"));
            res.status(200).json(value);
        }
    ).catch((err) => {
        console.log(util.ErrorStream(FILE_NAME, "RETRIVAL", "Data not found", err));
        res.status(404).json({ err: err });
    })

})

ledgerRouter.get("/", (req, res) => {

    let ledgerInfos = []

    const debugText = util.RDebugText(FILE_NAME, "GET all", ROUTER_NAME);
    console.log(debugText);

    collClient.find({})
        .forEach((document) => {
            ledgerInfos.push(document);
        })
        .then(() => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data found"));
            res.status(200).json(ledgerInfos);
        })
        .catch((err) => {
            console.log(util.ErrorStream(FILE_NAME, "RETRIVAL", "Data not found", err));
            res.status(404).send({ err: err });
        })
});

ledgerRouter.post("/:id", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "POST :id", ROUTER_NAME);
    console.log(debugText);

    const id = req.params.id;
    const dataBody = req.body;

    const data = {
        id: id,
        date: dataBody.date,
        particular: dataBody.particular,
        card: dataBody.card,
        accountno: dataBody.accountno,
        amount: dataBody.amount
    }

    collClient.insertOne(data).then((value) => {
        console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data Inserted", value));
        res.status(201).json(value);
    }, (err) => {
        console.log(util.ErrorStream(FILE_NAME, "INSERTION", "Data not Inserted", err));
        res.status(500).json({ error: err });
    });
});

module.exports = ledgerRouter;
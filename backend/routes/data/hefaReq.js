// HEFA Reqeust Router 

// GET 
// @params 
// <HEFA_ID:string>:<DATE:string>  (? HEFA Request can be made only once per day)
// Unique retrival 
//
// GET 
// @params
// <HEFA_ID>
// All data          (!> Search query will be added)
//
// POST
// @params 
// 
// <email:string> <password:string> <hefaId:string> <amountReq:int> <particular:string> 
// <status:string> <amountGiven:int> <validatedBy:string> <date:string>
//
// DELETE
// @params 
// 
// <uniqueId:string>  
// 
// PATCH
// @params 
// <uniqueId:string>
// @role
// Only to update <status:string> <amountGiven:int>
//
// UNIQUE 
// @id 
// <HEFA_ID:string>:<DATE:string> 

// Roles : 
// (i) CRUD Operations 
// (ii) Manages the state of HEFA Request
// (iii) Synchronizes with pdf generating router

// STATUS CODES
// 200 - Success Operation
// 201 - Success Creation
// 404 - Not found
// 500 - Server Error
// 403 - Forbidden Request

/*
 DOCUMENT STRUCTURE
  {
    email
    password
    hefaId    <country_code> <bank_code> <institute_code> <category>
    amountReq
    particular
    amountGiven
    validatedBy
    date        DD-MM-YYYY
    status     approved | pending
  }

*/

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./../../controller/db");
const util = require("./../../controller/utils");

const FILE_NAME = "hefaReq.js";
const ROUTER_NAME = "hefaRefRouter";
const COLLECTION_NAME = "hefa_request";
const DATABASE_NAME = "SE_DATABASE";

const hefaRefRouter = express.Router();
hefaRefRouter.use(cors());
hefaRefRouter.use(bodyparser.json());

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

hefaRefRouter.get("/:hefaId/:date", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET :hefaId :date", ROUTER_NAME);
    console.log(debugText);

    collClient.findOne({ hefaId: req.params.hefaId, date: req.params.date }).then(
        (value) => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data found with uniqueId"));
            res.status(200).json(value);
        }
    ).catch((err) => {
        console.log(util.ErrorStream(FILE_NAME, "RETRIVAL", "Data not found", err));
        res.status(404).json({ err: err });
    })

})

const TODAY = "18-09-2022";

hefaRefRouter.get("/:hefaId", (req, res) => {

    let hefaInfos = []

    const debugText = util.RDebugText(FILE_NAME, "GET :hefaId", ROUTER_NAME);
    console.log(debugText);

    const filterDate = req.query.date ? req.query.date : `${TODAY}`

    collClient.find({ hefaId: req.params.hefaId, date: filterDate })
        .forEach((document) => {
            hefaInfos.push(document);
        })
        .then(() => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data found"));
            res.status(200).json(hefaInfos);
        })
        .catch((err) => {
            console.log(util.ErrorStream(FILE_NAME, "RETRIVAL", "Data not found", err));
            res.status(404).send({ err: err });
        })
})

hefaRefRouter.get("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET", ROUTER_NAME);
    console.log(debugText);
    res.status(403).json({ info: "You cannot GET date without specific credentials" });
});

hefaRefRouter.post("/:hefaId/:date", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "POST :hefaId :date", ROUTER_NAME);
    console.log(debugText);

    const id = req.params.hefaId;
    const date = req.params.date;
    const dataBody = req.body;

    const data = {
        email: dataBody.email,
        password: dataBody.password,
        hefaId: id,
        amountReq: dataBody.amountReq,
        particular: dataBody.particular,
        status: dataBody.status,
        amountGiven: dataBody.amountGiven,
        validatedBy: dataBody.validatedBy,
        date: date
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

// Pass new values are search queries
// Ex : ?status=<status>&amountGuven=<amountGiven>&validatedBy=<validatedBy>
hefaRefRouter.patch("/:hefaId/:date", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "PATCH", ROUTER_NAME);
    console.log(debugText);

    // status amountGiven validatedBy
    const status = req.query.status;
    const amountGiven = req.query.amountGiven;
    const validatedBy = req.query.validatedBy;

    collClient.updateOne({
        hefaId: req.params.hefaId,
        date: req.params.date
    },
        {
            $set: {
                status: status,
                validatedBy: validatedBy,
                amountGiven: amountGiven
            }
        }).then(
            (value) => {
                console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data Updated", value));
                res.status(201).json(value);
            }
        ).catch((err) => {
            console.log(util.ErrorStream(FILE_NAME, "UPDATE", "Data not Updated", err));
            res.status(500).json({ error: err });
        });
})

hefaRefRouter.delete("/:hefaId/:date", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "DELETE", ROUTER_NAME);
    console.log(debugText);

    const hefaId= req.params.hefaId;
    const date = req.params.date;

    collClient.deleteOne({hefaId:  hefaId , date : date})
    .then(
        (value) => {
            console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data Deleted", value));
            res.status(201).json(value);
        }
    ).catch((err) => {
        console.log(util.ErrorStream(FILE_NAME, "DELETE", "Data not Deleted", err));
        res.status(500).json({ error: err });
    });
})

module.exports = hefaRefRouter;
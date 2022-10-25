// Mis Reports Router 

// GET 
// @params 
// <param_list>
// 
// POST
// @params 
// <param_list>
//
// DELETE
// @params 
// <param_list>
//
// PATCH
// @params 
// <param_list>

// for CRUD ops in Mis Reports database
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const db = require("./../../controller/db");
const util = require("./../../controller/utils");

const FILE_NAME = "misReports.js";
const ROUTER_NAME = "misReportsRouter";
const COLLECTION_NAME = "mis_report";
const DATABASE_NAME = "SE_DATABASE"

const misReportsRouter = express.Router();
misReportsRouter.use(cors());
misReportsRouter.use(bodyparser.json());

// Collection Client
let collClient;

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

misReportsRouter.get("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "GET", ROUTER_NAME);
    console.log(debugText);
    res.status(200).send(debugText);
});

misReportsRouter.post("/:id/:name", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "POST", ROUTER_NAME);
    console.log(debugText);

    const { id, name } = req.params;

    collClient.insertOne({ name: name, age: 21, id: id }).then((value) => {
        console.log(util.DebugStream(FILE_NAME, "SUCCESS", "Data Inserted", value));
        res.status(201).json(value);
    }, (err) => {
        console.log(util.ErrorStream(FILE_NAME, "FAILURE", "Data not Inserted", err));
        res.status(500).json({ error: err });
    });
});

misReportsRouter.patch("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "PATCH", ROUTER_NAME);
    console.log(debugText);
    res.send(debugText);
})

misReportsRouter.delete("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME, "DELETE", ROUTER_NAME);
    console.log(debugText);
    res.send(debugText);
})

module.exports = misReportsRouter;
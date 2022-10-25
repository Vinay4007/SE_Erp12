// Faculty Info Router 

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

// for CRUD ops in Faculty Info database
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const db = require("./../../controller/db");
const util = require("./../../controller/utils");

const FILE_NAME = "facultyInfo.js";
const ROUTER_NAME = "facultyInfoRouter";
const COLLECTION_NAME = "faculty_info";
const DATABASE_NAME = "SE_DATABASE"

const facultyInfoRouter = express.Router();
facultyInfoRouter.use(cors());
facultyInfoRouter.use(bodyparser.json());

// Collection Client
let collClient;

const callBack = (err) => {
    if (!err) {
        collClient = db.RetrieveDatabaseConnection().collection(COLLECTION_NAME, util.ROUTER_DEFAULTS);
        // util.DebugStream(FILE_NAME,"SUCCESS","Collection connection success",collClient.stats);
        util.DebugStream(FILE_NAME,"SUCCESS","Collection connection success","--STATS");
    }else{
        util.ErrorStream(FILE_NAME,"CONNECTION FAILED","Collection connection failed",err);
    }
}

db.ConnectToDatabase(callBack, DATABASE_NAME);

facultyInfoRouter.get("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME,"GET",ROUTER_NAME);
    console.log(debugText);
    res.status(200).send(debugText);
});

facultyInfoRouter.post("/:id/:name", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME,"POST",ROUTER_NAME);
    console.log(debugText);

    const { id, name } = req.params;

    collClient.insertOne({ name: name, age: 21, id: id }).then((value) => {
        console.log(util.DebugStream(FILE_NAME,"SUCCESS","Data Inserted",value));
        res.status(201).json(value);
    }, (err) => {
        console.log(util.ErrorStream(FILE_NAME,"FAILURE","Data not Inserted",err));
        res.status(500).json({ error: err });
    });
});

facultyInfoRouter.patch("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME,"PATCH",ROUTER_NAME);
    console.log(debugText);
    res.send(debugText);
})

facultyInfoRouter.delete("/", (req, res) => {
    const debugText = util.RDebugText(FILE_NAME,"DELETE",ROUTER_NAME);
    console.log(debugText);
    res.send(debugText);
})

module.exports = facultyInfoRouter;
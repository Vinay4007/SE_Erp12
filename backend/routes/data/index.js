const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");


const FILE_NAME = "index.js"
const ROUTER_NAME = "indexDataRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

// router's to store , update , delete , get data
const annualBudgetRouter = require("./annualBudget");
const facultyInfoRouter = require("./facultyInfo");
const hefaReqRouter = require("./hefaReq");
const incomeSheetRouter = require("./incomeSheet");
const locRouter = require("./loc");
const ledgersRouter = require("./ledgers");
const misReportRouter = require("./misReport");
const studentInfoRouter = require("./studentInfo");

const indexDataRouter = express.Router();

indexDataRouter.use(express.json());
indexDataRouter.use(cookieParser());
indexDataRouter.use(cors());
indexDataRouter.use(bodyparser.json());

indexDataRouter.use("/annualBudget",annualBudgetRouter);
indexDataRouter.use("/facultyInfo",facultyInfoRouter);
indexDataRouter.use("/hefaReq",hefaReqRouter);
indexDataRouter.use("/incomeSheet",incomeSheetRouter);
indexDataRouter.use("/loc",locRouter);
indexDataRouter.use("/ledgers",ledgersRouter);
indexDataRouter.use("/misReport",misReportRouter);
indexDataRouter.use("/studentInfo",studentInfoRouter);


indexDataRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

indexDataRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

indexDataRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

indexDataRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
indexDataRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
indexDataRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = indexDataRouter;

// ConnectToDB : (callBack,database)=>{
//     MongoClient.connect(URI).then((client)=>{
//         dbConnection = client.db(database); // even here we can give the database name
//         console.log("Connected to DB");
//         return callBack(); 
//     }).catch((reason)=>{
//         console.log(`MongoDB Connection failed ${reason}`)
//         return callBack(reason);
//     })
// },
// GetDBConnection : () =>{
//     return dbConnection
// },

// const dotenv = require('dotenv');
// const {MongoClient , Db} = require('mongodb')

// dotenv.config();

// // This file has two roles 
// // (i) creates dbConnection Client to db for each request from subRoute
// // (ii) re-targets requests

// let dbConnectionClient

// // const USER_NAME = process.env.USER_NAME;
// // const PASSW = process.env.PASSW;
// const URI = process.env.URI;

// Open specific db conn
// ConnectToDataBase : (callBack,dataBaseName)=>{
//     MongoClient.connect(URI)
//     .then((client)=>{
//         dbConnectionClient = client.db(dataBaseName);
//         return callBack(); 
//     }).catch((reason)=>{
//         console.log(`MongoDB Connection failed ${reason} for ${dataBaseName}`)
//         return callBack(reason);
//     })
// },
// RetrieveDataBaseConnection : () =>{
//     return dbConnectionClient
// },
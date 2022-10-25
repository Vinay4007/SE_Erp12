const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
// app.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "index.js"
const ROUTER_NAME = "indexUtilRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

// router's to store , update , delete , get data
const pdfRouter = require("./pdf/index");
const csvRouter = require("./csv/index");

const indexUtilRouter = express.Router();

indexUtilRouter.use(express.json());
indexUtilRouter.use(cookieParser());
indexUtilRouter.use(cors());
indexUtilRouter.use(bodyparser.json());

indexUtilRouter.use("/pdf",pdfRouter);
indexUtilRouter.use("/csv",csvRouter);


indexUtilRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

indexUtilRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

indexUtilRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

indexUtilRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
indexUtilRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
indexUtilRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = indexUtilRouter;
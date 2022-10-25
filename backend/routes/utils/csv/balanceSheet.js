const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
// balanceSheetRouter.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "balanceSheet.js"
const ROUTER_NAME = "balanceSheetRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

const balanceSheetRouter = express.Router();

balanceSheetRouter.use(cors());
balanceSheetRouter.use(bodyparser.json());

balanceSheetRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

balanceSheetRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

balanceSheetRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

balanceSheetRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
balanceSheetRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
balanceSheetRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.balanceSheetRouter.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = balanceSheetRouter;

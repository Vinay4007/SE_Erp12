const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
// incomeSheetRouter.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "incomeSheet.js"
const ROUTER_NAME = "incomeSheetRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

const incomeSheetRouter = express.Router();

incomeSheetRouter.use(cors());
incomeSheetRouter.use(bodyparser.json());

incomeSheetRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

incomeSheetRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

incomeSheetRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

incomeSheetRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
incomeSheetRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
incomeSheetRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.incomeSheetRouter.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = incomeSheetRouter;

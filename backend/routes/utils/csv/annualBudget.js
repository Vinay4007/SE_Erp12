const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
// annualBudgetRouter.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "annualBudget.js"
const ROUTER_NAME = "annualBudgetRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

const annualBudgetRouter = express.Router();

annualBudgetRouter.use(cors());
annualBudgetRouter.use(bodyparser.json());

annualBudgetRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

annualBudgetRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

annualBudgetRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

annualBudgetRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
annualBudgetRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
annualBudgetRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.annualBudgetRouter.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = annualBudgetRouter;

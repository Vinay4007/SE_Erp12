const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");


const FILE_NAME = "index.js"
const ROUTER_NAME = "indexPdfRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

// routers to create pdf  , send pdf 
const balanceSheetPdfRouter = require("./balanceSheet");
const emdStoragePdfRouter = require("./emdStorage");
const incomeSheetPdfRouter = require("./incomeSheet");
const locPdfRouter = require("./loc");
const annualBudgetPdfRouter = require("./annualBudget");
const hefaReqPdfRouter = require('./hefaReq')

const indexPdfRouter = express.Router();

indexPdfRouter.use(logger("dev"));
indexPdfRouter.use(express.json());
indexPdfRouter.use(cookieParser());
indexPdfRouter.use(cors());
// indexPdfRouter.use(express.static(path.join(__dirname, "public")));

indexPdfRouter.use("/balanceSheet", balanceSheetPdfRouter);
indexPdfRouter.use("/emdStorage", emdStoragePdfRouter);
indexPdfRouter.use("/incomeSheet", incomeSheetPdfRouter);
indexPdfRouter.use("/loc", locPdfRouter);
indexPdfRouter.use("/annualBudget", annualBudgetPdfRouter);
indexPdfRouter.use("/hefaReq",hefaReqPdfRouter);


indexPdfRouter.get("/", (req, res) => {
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

indexPdfRouter.post("/", (req, res) => {
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

indexPdfRouter.patch("/", (req, res) => {
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

indexPdfRouter.delete("/", (req, res) => {
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
indexPdfRouter.use(function (req, res, next) {
    next(createError(404));
});

// error handler
indexPdfRouter.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.indexPdfRouter.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = indexPdfRouter;
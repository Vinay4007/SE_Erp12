const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const FILE_NAME = "index.js"
const ROUTER_NAME = "indexCsvRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

// router's to create csv , send pdf
const annualBudgetCsvRouter = require("./annualBudget");
const balanceSheetCsvRouter = require("./balanceSheet");
const incomeSheetCsvRouter = require("./incomeSheet");

const indexCsvRouter = express.Router();

indexCsvRouter.use(logger("dev"));
indexCsvRouter.use(express.json());
indexCsvRouter.use(cookieParser());
indexCsvRouter.use(cors());
// indexCsvRouter.use(express.static(path.join(__dirname, "public")));

indexCsvRouter.use("/annualBudget", annualBudgetCsvRouter);
indexCsvRouter.use("/facultyInfo", balanceSheetCsvRouter);
indexCsvRouter.use("/hefaReq", incomeSheetCsvRouter);


indexCsvRouter.get("/", (req, res) => {
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

indexCsvRouter.post("/", (req, res) => {
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

indexCsvRouter.patch("/", (req, res) => {
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

indexCsvRouter.delete("/", (req, res) => {
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
indexCsvRouter.use(function (req, res, next) {
    next(createError(404));
});

// error handler
indexCsvRouter.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.indexCsvRouter.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = indexCsvRouter;
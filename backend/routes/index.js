const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
// indexBaseRouter.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "index.js"
const ROUTER_NAME = "indexBaseRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

const indexBaseRouter = express.Router();

indexBaseRouter.use(cors());
indexBaseRouter.use(bodyparser.json());

indexBaseRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

indexBaseRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

indexBaseRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

indexBaseRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
indexBaseRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
indexBaseRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.get("env") === "development" ? err : {};
	// render the error page
	res.status(err.status || 500);
});

module.exports = indexBaseRouter;

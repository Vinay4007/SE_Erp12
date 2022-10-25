const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
// authenticateRouter.use(express.static(path.join(__dirname, "public")));

const FILE_NAME = "authenticate.js"
const ROUTER_NAME = "authRouter"

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

function DebugText(reqType) {
    return `${FILE_NAME} ${reqType} ${ROUTER_NAME}`
}

const authenticateRouter = express.Router();

authenticateRouter.use(express.json());
authenticateRouter.use(cookieParser());
authenticateRouter.use(cors());
authenticateRouter.use(bodyparser.json());

authenticateRouter.get("/",(req,res)=>{
    const debugText = DebugText('GET');
    console.log(debugText);
    res.send(debugText);
})

authenticateRouter.post("/",(req,res)=>{
    const debugText = DebugText('POST');
    console.log(debugText);
    res.send(debugText);
})

authenticateRouter.patch("/",(req,res)=>{
    const debugText = DebugText('PATCH');
    console.log(debugText);
    res.send(debugText);
})

authenticateRouter.delete("/",(req,res)=>{
    const debugText = DebugText('DELETE');
    console.log(debugText);
    res.send(debugText);
})


// catch 404 and forward to error handler
authenticateRouter.use(function(req, res, next) {
	next(createError(404));
});

// error handler
authenticateRouter.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.authenticateRouter.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = authenticateRouter;

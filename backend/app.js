const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require('helmet')

/*

 / 
 /auth
 /util 
 /data

*/

const indexRouter = require("./routes/index");
const authRouter = require("./routes/authenticate");
const utilRouter = require("./routes/utils/index");
const indexDataRouter  = require('./routes/data/index');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(helmet());

app.use("/auth", authRouter);
app.use("/data",indexDataRouter);
app.use("/util",utilRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
});

module.exports = app;
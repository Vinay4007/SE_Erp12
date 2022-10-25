// Router specific

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>
// const udpclient = require('./kafka/client');
const logger = require('./rpc/logClient')

const debugChalk = (msg) => {
	return msg;
}

const errorChalk = (msg) => {
	return msg;
}

function RDebugText(fileName, reqType, routerName) {
	let msg = debugChalk(`R-DEBUG : ${fileName} ${reqType} ${routerName}`);
	console.log(msg)
	logger.storeLog(msg,"Nishanth","Oct-6","CS20B025","TRANSACTION")
	// udpclient.sendMessage(msg)
}

function RErrorText(fileName, error, routerName) {
	let msg = errorChalk(`R-ERROR : ${fileName} ${error} ${routerName}`);
	console.log(msg)
	logger.storeLog(msg,"Nishanth","Oct-6","CS20B025","TRANSACTION")
	// udpclient.sendMessage(msg)
}

// Event Specific

// DEBUG FORMAT
// <FILE_NAME> <STATUS> <MESSAGE> <OUTPUT>

// For event specific  debug 
function DebugStream(fileName, status, moreInfo, output) {
	let msg = debugChalk(`DEBUG : ${fileName} ${status} ${moreInfo} ${output}`);
	console.log(msg)
	logger.storeLog(msg,"Nishanth","Oct-6","CS20B025","TRANSACTION")
	// udpclient.sendMessage(msg)
}

// ERROR FORMAT
// <FILE_NAME> <TYPE_OF_ERROR> <MORE_INFO> <ROUTER_NAME> 
function ErrorStream(fileName, typeErr, errExtra, output) {
	let msg = errorChalk(`ERROR : ${fileName} ${typeErr} ${errExtra} ${output}`);
	console.log(msg)
	logger.storeLog(msg,"Nishanth","Oct-6","CS20B025","TRANSACTION")
}

// Default Configuration of ROUTER's opening collection's
const ROUTER_DEFAULTS = {
	strict: true
}

module.exports = { RErrorText, RDebugText, ErrorStream, DebugStream, ROUTER_DEFAULTS };
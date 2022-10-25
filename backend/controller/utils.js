// const chalk = require('chalk')

// const myChalk = new Chalk({level : 2});
// const debugChalk  =myChalk.bold.yellow ; 
// const errorChalk = myChalk.bold.redBright ; 

// Router specific

// DEBUG FORMAT  :
// <FILE_NAME> <REQUEST_TYPE> <ROUTER_NAME>

debugChalk = (msg) => {
    return msg;
}

errorChalk = (msg) => {
    return msg;
}

function RDebugText(fileName , reqType , routerName) {
    return debugChalk(`R-DEBUG : ${fileName} ${reqType} ${routerName}`);
}

function RErrorText(fileName,error,routerName) {
    return errorChalk(`R-ERROR : ${fileName} ${error} ${routerName}`);
}

// Event Specific

// DEBUG FORMAT
// <FILE_NAME> <STATUS> <MESSAGE> <OUTPUT>

// For event specific  debug 
function DebugStream(fileName,status,moreInfo,output) {
    return debugChalk(`DEBUG : ${fileName} ${status} ${moreInfo} ${output}`);
}

// ERROR FORMAT
// <FILE_NAME> <TYPE_OF_ERROR> <MORE_INFO> <ROUTER_NAME> 
function ErrorStream(fileName,typeErr,errExtra,output){
    return errorChalk(`ERROR : ${fileName} ${typeErr} ${errExtra} ${output}`);
}

// Default Configuration of ROUTER's opening collection's
const ROUTER_DEFAULTS = {
    strict : true
}

module.exports = {RErrorText , RDebugText , ErrorStream , DebugStream , ROUTER_DEFAULTS};
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
const util = require('./utils')

dotenv.config();

const FILE_NAME = "db.js";

// Database connection to client
let dbConnection;

// URI to connect to database 
// Stored in .env file
const URI = process.env.URI;

const ConnectToDatabase = (callBack , dbName) => {
    MongoClient.connect(URI)
    .then((client)=>{
        dbConnection = client.db(dbName);
        console.log(util.DebugStream(FILE_NAME,"SUCCESS","Database Connection established"));
        return callBack(); 
    })
    .catch((reason)=>{
        console.log(util.ErrorStream(FILE_NAME,"FAILURE","Database Connection failed",reason));
        return callBack(reason);
    });
}

const RetrieveDatabaseConnection = () => {
    return dbConnection;
}

module.exports = {ConnectToDatabase , RetrieveDatabaseConnection}
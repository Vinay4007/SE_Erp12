const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./../proto/logger.proto";

const protoOptions = {
    keepCase: true,
    oneofs: true,
    enums: String
}
const createInput = (message, initiatedBy, date, personId, other) => {
    return {
        message: message,
        initiatedBy: initiatedBy,
        date: date,
        personId: personId,
        type: other
    }
}

const PORT = 5000;

const loggerPackage = protoLoader.loadSync(PROTO_PATH, protoOptions)
const loggerService = grpc.loadPackageDefinition(loggerPackage).LoggerService;

const clientstub = new loggerService(`localhost:${PORT}`, grpc.credentials.createInsecure())

const storeLog = (message, initiatedBy, date, personId, type) => {
    clientstub.StoreLog(createInput(message, initiatedBy, date, personId, type), (error, output) => {
        if (error) {
            console.log(`${error}`);
        } else {
            console.log(`Value got from server : ${output.stored}`)
        }
    })
}

module.exports = {storeLog}

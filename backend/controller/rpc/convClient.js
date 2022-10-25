const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./../proto/converter.proto";

const protoOptions = {
    keepCase: true,
    oneofs: true,
    enums: String
}

const PORT = 4000;

const loggerPackage = protoLoader.loadSync(PROTO_PATH, protoOptions)
const loggerService = grpc.loadPackageDefinition(loggerPackage).LoggerService;

const clientstub = new loggerService(`localhost:${PORT}`, grpc.credentials.createInsecure())
clientstub.ConvertFromBytes({
    name : "Nishanth"
}, (error, output) => {
    if (error) {
        console.log(`Error in rpc ${error}`);
    } else {
        console.log(`Value got from server : ${output.stored}`)
    }
})
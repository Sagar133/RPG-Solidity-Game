"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipfs_http_client_1 = __importDefault(require("ipfs-http-client"));
const config_1 = require("../../../config");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let portString = config_1.ipfsPort.toString();
const ipfs = new ipfs_http_client_1.default({
    host: config_1.host,
    portString,
    protocol: config_1.protocol
});
const addFileToIpfs = async (fileName, file) => {
    //two keys 
    // first what it is called when added to ipfs  : File Path
    // then the actual content : File  itseld
    const filePath = path_1.default.join(__dirname, `../../files/${fileName}`);
    file.mv(filePath, async (err) => {
        if (err) {
            console.error(`file download in server failed:${err}`);
            throw new Error(`Error: File Upload Failed: ${err}`);
        }
    });
    const serverFile = fs_1.default.readFileSync(filePath);
    const fileAdded = await ipfs.add({
        path: fileName,
        content: serverFile,
    });
    const fileHash = fileAdded[0].hash;
    //delete file from server
    fs_1.default.unlink(filePath, (err) => {
        if (err)
            console.error(err);
    });
    return fileHash;
};
exports.default = addFileToIpfs;
//# sourceMappingURL=uploadFileToIpfs.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sdk_1 = __importDefault(require("@pinata/sdk"));
const config_1 = require("../config");
const pinata = sdk_1.default(config_1.pinataConfig.api_key, config_1.pinataConfig.api_secret);
pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
const addFileToIpfs = async (fileName, file) => {
    //two keys 
    // first what it is called when added to ipfs  : File Path
    // then the actual content : File  itseld
    console.log('file data' + file.name);
    const filePath = path_1.default.join(__dirname, `../../files/${file.name}`);
    file.mv(filePath, (err) => {
        if (err) {
            console.error(err);
            throw new Error(`error:failed to move uploaded file to local server dest: \n${err}`);
        }
    });
    console.log('file path ' + filePath);
    const readableStreamForFile = fs_1.default.createReadStream(filePath);
    let fileHash = undefined;
    try {
        const result = await pinata.pinFileToIPFS(readableStreamForFile).then((result) => {
            //handle results here
            console.log(result);
            fileHash = result.IpfsHash;
        });
    }
    catch (err) {
        //handle error here
        console.log(err);
    }
    ;
    //delete file from server
    fs_1.default.unlink(filePath, (err) => {
        if (err)
            console.error(err);
    });
    return fileHash;
};
exports.default = addFileToIpfs;
//# sourceMappingURL=uploadFileToIpfs.js.map
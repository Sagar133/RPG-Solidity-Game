import fs from 'fs'
import { UploadedFile } from 'express-fileupload';
import path from 'path'
import pinataSDK from '@pinata/sdk'
import {pinataConfig} from '../config'

const pinata = pinataSDK(pinataConfig.api_key,pinataConfig.api_secret);

pinata.testAuthentication().then((result:any) => {
    //handle successful authentication here
    console.log(result);
}).catch((err:any) => {
    //handle error here
    console.log(err);
});

const addFileToIpfs = async(fileName:string,file:UploadedFile):Promise<string> =>{
    //two keys 
    // first what it is called when added to ipfs  : File Path
    // then the actual content : File  itseld
    console.log('file data' + file.name);
    const filePath = path.join(__dirname,`../../files/${file.name}`);
    file.mv(filePath,(err)=>{
        if(err){
            console.error(err);
            throw new Error(`error:failed to move uploaded file to local server dest: \n${err}`)
        }
    })
    console.log('file path ' + filePath)
    const readableStreamForFile = fs.createReadStream(filePath);
    let fileHash =undefined;
    try {
        const result = await pinata.pinFileToIPFS(readableStreamForFile).then((result:any) => {
            //handle results here
            console.log(result);
            fileHash = result.IpfsHash;
        });
    }catch(err){
        //handle error here
        console.log(err);
    };
    //delete file from server
    fs.unlink(filePath,(err)=>{
        if(err)console.error(err);
    }) 
    return fileHash;
}

export default addFileToIpfs;


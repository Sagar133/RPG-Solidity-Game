import ipfsClient from 'ipfs-http-client';
import {host,ipfsPort,protocol} from '../config'
import fs from 'fs'
import { UploadedFile } from 'express-fileupload';
import path from 'path'


const portString = ipfsPort.toString();
const ipfs = new (ipfsClient as any)({
    host,
    portString,
    protocol
});

//@ts-ignore
const { globSource } = ipfsClient


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
    const fileAdded = await ipfs.add(globSource(filePath));
    console.log(fileAdded);
    if(!fileAdded.cid){
        throw new Error(`file not added to ipfs successfully`);
    }
    const fileHash = fileAdded.cid;
    //delete file from server
    fs.unlink(filePath,(err)=>{
        if(err)console.error(err);
    }) 
    return fileHash;
}

export default addFileToIpfs;


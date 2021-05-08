import ipfsClient from 'ipfs-http-client';
import {host,port,protocol} from '../config'
import fs from 'fs'

let portString:string = port.toString();

const ipfs = new (ipfsClient as any)({
    host,
    portString,
    protocol
});


const addFileToIpfs = async(fileName:string,filePath:string):Promise<string> =>{
    //two keys 
    // first what it is called when added to ipfs  : File Path
    // then the actual content : File  itseld
    const file = fs.readFileSync(filePath);
    const fileAdded = await ipfs.add({
        path:fileName,
        content:file,
    });
    const fileHash = fileAdded[0].hash;
    //delete file from server
    fs.unlink(filePath,(err)=>{
        if(err)console.error(err);
    }) 
    return fileHash;
}

export default addFileToIpfs;


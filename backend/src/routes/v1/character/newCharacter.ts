import express from 'express'
import { UploadedFile } from 'express-fileupload';
import fs from 'fs'
import path from 'path'
import addFileToIpfs from '../../../utils/uploadFileToIpfs';
const router = express.Router();

router.post('/',async (req,res)=>{
    const file =  req.files.file as UploadedFile;
    const fileName = req.body.fileName;
    const filePath = path.join(__dirname,`../files/${fileName}`);

    file.mv(filePath,async(err)=>{
        if(err){
            console.error(`Error: Failed to download the file`);
            throw new Error(`Error: File Upload Failed`);
        }
    })

    const fileHash = await addFileToIpfs(fileName,filePath);

    return res.json({
        fileName,
        fileHash,
    })
});

export default router;
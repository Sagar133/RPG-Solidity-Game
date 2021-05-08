import express from 'express'
import { UploadedFile } from 'express-fileupload';
import addFileToIpfs from '../../../utils/uploadFileToIpfs';
const router = express.Router();

router.post('/',async (req,res)=>{
   if(!req.files){
       throw new Error(`error: no image file recieved in the new character router`);
   }
    const file =  req.files.file as UploadedFile;
    const fileName = req.body.fileName;

    const fileHash = await addFileToIpfs(fileName,file);

    // return res.json({
    //     fileName,
    //     fileHash,
    // })
    return res.render('upload',{fileName,fileHash});
});

export default router;
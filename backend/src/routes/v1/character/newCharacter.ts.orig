import express from 'express'
import { UploadedFile } from 'express-fileupload';
import ICharacter, { Status } from '../../../utils/character';
import uploadCharacterToDb from '../../../utils/uploadCharacterToDb';
import addFileToIpfs from '../../../utils/uploadFileToIpfs';
const router = express.Router();

router.post('/',async (req,res)=>{
   if(!req.files?.file){
       throw new Error(`error: no image file recieved in the new character router`);
   }
    const file =  req.files.file as UploadedFile;
    const fileName = req.body.name;
    const fileHash = await addFileToIpfs(fileName,file);
   // const fileHash ="debugging_ongoing";
    const character :ICharacter= {
        name:req.body.name,
        description:req.body.desc,
        walletAddress:req.body.walletAddress,
        email:req.body.email,
        image:fileHash,
        isStory:req.body.isStory,
        status:Status.NOTAPPROVED,
        votes:0,
        createdAt:new Date().toISOString()
    } 
    const dbCharacter = await uploadCharacterToDb(character);
    console.log(`character:${JSON.stringify(dbCharacter,null,2)}`);
    
   if(!fileHash){
       throw new Error(`Failed to pin image to ipfs`);
   }else {
       console.log(`File Hash${fileHash}`);
   }
    // return res.json({
    //     fileName,
    //     fileHash,
    // })
    return res.render('upload',{fileName,fileHash});
});

export default router;
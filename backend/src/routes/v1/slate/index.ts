import express from 'express'
import SlateApi from './slate-api';

const router = express.Router();

router.post('/',async (req,res)=>{
    console.log("called");
    const data = await SlateApi.getCollectionById();
    if(!data) throw new Error(`failed the fetch by collection`)
    return res.json({
        "test":"test"
    })
});

export default router;


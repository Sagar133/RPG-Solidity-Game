import express from 'express';


const router =express.Router();

router.post('/:walletAddress',async (req,res)=>{
    const walletAddress = req.params.walletAddress;

   // const character =await voteCharacter(walletAddress);
})

export default router;
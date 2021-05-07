import express from 'express';
import uploadToSlate from './slate'
const router  = express.Router();

router.use('/upload',uploadToSlate)

export default router;

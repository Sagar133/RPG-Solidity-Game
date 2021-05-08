import express from 'express';
import newCharacter from './character'
const router  = express.Router();

router.use('/character',newCharacter)

export default router;

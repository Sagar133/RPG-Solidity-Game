import express from 'express';
import newCharacter from './character'
const router  = express.Router();

router.use('/newCharacter',newCharacter)

export default router;

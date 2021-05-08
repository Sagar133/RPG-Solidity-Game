
import express from 'express'
import newCharacter from './newCharacter'
const router = express.Router();

router.use('/new',newCharacter);

export default router;
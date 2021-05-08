
import express from 'express'
import newCharacter from './newCharacter'
const router = express.Router();

router.post('/new',newCharacter);

export default router;
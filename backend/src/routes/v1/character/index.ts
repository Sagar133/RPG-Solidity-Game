
import express from 'express'
import newCharacter from './newCharacter'
import voteCharacter from './voteCharacter'
const router = express.Router();

router.use('/new',newCharacter);
router.use('/vote',voteCharacter);

export default router;
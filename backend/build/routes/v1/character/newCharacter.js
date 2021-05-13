"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const character_1 = require("../../../utils/character");
const uploadCharacterToDb_1 = __importDefault(require("../../../utils/uploadCharacterToDb"));
const uploadFileToIpfs_1 = __importDefault(require("../../../utils/uploadFileToIpfs"));
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    if (!req.files?.file) {
        throw new Error(`error: no image file recieved in the new character router`);
    }
    const file = req.files.file;
    const fileName = req.body.name;
    const fileHash = await uploadFileToIpfs_1.default(fileName, file);
    // const fileHash ="debugging_ongoing";
    const character = {
        name: req.body.name,
        description: req.body.desc,
        walletAddress: req.body.walletAddress,
        email: req.body.email,
        image: fileHash,
        isStory: req.body.isStory,
        status: character_1.Status.NOTAPPROVED,
        votes: 0,
        createdAt: new Date().toISOString()
    };
    const dbCharacter = await uploadCharacterToDb_1.default(character);
    console.log(`character:${JSON.stringify(dbCharacter, null, 2)}`);
    if (!fileHash) {
        throw new Error(`Failed to pin image to ipfs`);
    }
    else {
        console.log(`File Hash${fileHash}`);
    }
    // return res.json({
    //     fileName,
    //     fileHash,
    // })
    return res.render('upload', { fileName, fileHash });
});
exports.default = router;
//# sourceMappingURL=newCharacter.js.map
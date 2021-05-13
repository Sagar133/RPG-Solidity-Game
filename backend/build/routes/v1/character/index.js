"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newCharacter_1 = __importDefault(require("./newCharacter"));
const voteCharacter_1 = __importDefault(require("./voteCharacter"));
const router = express_1.default.Router();
router.use('/new', newCharacter_1.default);
router.use('/vote', voteCharacter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
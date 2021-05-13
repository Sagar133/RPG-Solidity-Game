"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const character_1 = __importDefault(require("./character"));
const router = express_1.default.Router();
router.use('/character', character_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
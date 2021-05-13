"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slate_api_1 = __importDefault(require("./slate-api"));
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    console.log("called");
    const data = await slate_api_1.default.getCollectionById();
    if (!data)
        throw new Error(`failed the fetch by collection`);
    return res.json({
        "test": "test"
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map
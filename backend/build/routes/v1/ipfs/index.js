"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const form_data_1 = __importDefault(require("form-data"));
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    const url = 'https://uploads.slate.host/api/public/34073e0b-5ceb-4745-b248-c794403182fb'; // collection ID
    let userData = req.body;
    let resp;
    var form = new form_data_1.default();
    for (var key in userData)
        form.append(key, userData[key]);
    try {
        const response = await node_fetch_1.default(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic SLAbc964123-0f17-4824-ac78-c9108549f399TE',
                'Content-Type': "Multipart/form-data"
            },
            body: form,
        });
        resp = await response.json();
        return res.json({
            userData,
            resp,
        });
    }
    catch (err) {
        console.error(err);
        return res.send(err);
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map
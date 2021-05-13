"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = require("../../../config");
class SlateApi {
    static async getCollectionById() {
        console.log("called");
        const response = await node_fetch_1.default('https://slate.host/api/v2/get-collection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${config_1.slate.api_key}`,
            },
            body: JSON.stringify({
                data: {
                    id: config_1.slate.collection_id
                }
            })
        });
        if (!response) {
            console.log("No response in getCollectionById");
            return undefined;
        }
        const json = await response.json();
        if (json.error) {
            console.log(json.error);
            return json.error;
        }
        else {
            const collection = json.collection;
            console.log(`The collection is ${JSON.stringify(collection, null, 2)}`);
            return collection;
        }
    }
    static async uploadToCollection(inputFile) {
        const url = `https://uploads.slate.host/api/public/${config_1.slate.collection_id}`; // collection ID
        let file = inputFile; //e.target.files[0];
        let data = new FormData();
        data.append("data", file);
        const response = await node_fetch_1.default(url, {
            method: 'POST',
            headers: {
                Authorization: 'Basic SLAbc964123-0f17-4824-ac78-c9108549f399TE',
            },
            body: data
        });
    }
}
exports.default = SlateApi;
//# sourceMappingURL=slate-api.js.map
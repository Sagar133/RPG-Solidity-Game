"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipfs_1 = __importDefault(require("ipfs"));
const orbit_db_1 = __importDefault(require("orbit-db"));
const crypto_1 = __importDefault(require("crypto"));
const ipfsOptions = {
    EXPERIMENTAL: {
        pubsub: true
    }
};
const initIPFSInstance = async () => {
    return await ipfs_1.default.create(ipfsOptions);
};
const getId = () => {
    return crypto_1.default.randomBytes(64).toString("hex");
};
const uploadCharacterToDb = async (character) => {
    return initIPFSInstance().then(async (ipfs) => {
        const orbitdb = await orbit_db_1.default.createInstance(ipfs);
        // Create / Open a database
        const db = await orbitdb.docstore("characters");
        await db.load();
        //check if character already exists
        let charac = await db.query((e) => e.name == character.name);
        if (charac.length != 0) {
            console.log("character already in db: " + JSON.stringify(charac, null, 5));
            await orbitdb.disconnect();
            return { ...charac, name: character.name };
        }
        // Add an entry
        const hash = await db.put({ _id: getId(), name: character.name, ...character });
        console.log(hash);
        //Query character
        charac = await db.query((e) => e.name == character.name);
        console.log(`New created charac: ${JSON.stringify(charac, null, 5)}`);
        console.log(`Output full db`);
        // Output full db
        const result = await db.query((e) => e.name == character.name);
        console.log(`result: ${JSON.stringify(result, null, 4)}`);
        await orbitdb.disconnect();
        return { ...charac, name: character.name };
    });
};
exports.default = uploadCharacterToDb;
//# sourceMappingURL=uploadCharacterToDb.js.map
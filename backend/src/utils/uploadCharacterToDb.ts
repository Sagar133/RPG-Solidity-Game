import ICharacter from "./character";


import IPFS from 'ipfs'
import OrbitDB from 'orbit-db'
import { Options } from "ipfs-core/src/components";
import crypto from 'crypto'

const ipfsOptions = {
    EXPERIMENTAL: {
      pubsub: true
    }
  }

const initIPFSInstance = async () => {
    return await IPFS.create(ipfsOptions as Options);
};


const getId = ():string =>{
   return crypto.randomBytes(64).toString("hex");
}


const uploadCharacterToDb = async (character:ICharacter):Promise<ICharacter> =>{
   return initIPFSInstance().then(async (ipfs)=>{
    const orbitdb = await OrbitDB.createInstance(ipfs);

    // Create / Open a database
    const db = await orbitdb.docstore("characters");
    await db.load();

    //check if character already exists
    let charac= await db.query((e: any) => e.name == character.name);
    if (charac.length != 0){
      console.log("character already in db: " + JSON.stringify(charac,null,5));
      await orbitdb.disconnect();
      return {...charac,name:character.name};
    }
    

    // Add an entry
    const hash = await db.put({ _id: getId(), name:character.name, ...character });
    console.log(hash);


    //Query character
    charac = await db.query((e: any) => e.name == character.name);

    console.log(`New created charac: ${JSON.stringify(charac,null,5)}`)

    console.log(`Output full db`);
    // Output full db
    const result =  await db.query((e: any) => e.name == character.name);
    console.log(`result: ${JSON.stringify(result, null, 4)}`);
    await orbitdb.disconnect();
    return {...charac,name:character.name};
   });
}


export default uploadCharacterToDb;
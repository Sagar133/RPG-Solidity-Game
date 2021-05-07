
import fetch from 'node-fetch'
import { slate } from '../../../config';
export default class SlateApi {
    public static async  getCollectionById():Promise<any> {
        console.log("called");
        const response = await fetch('https://slate.host/api/v2/get-collection', {
                 method: 'POST',
                 headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${slate.api_key}`,
                 },
                 body: JSON.stringify({ 
                        data: {
                            id: slate.collection_id
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
        } else {
         const collection = json.collection;
         console.log(`The collection is ${JSON.stringify(collection,null,2)}`);
         return collection;
        }
    }

    public static async uploadToCollection(inputFile:any){
        const url = `https://uploads.slate.host/api/public/${slate.collection_id}`; // collection ID
        let file = inputFile//e.target.files[0];

        let data = new FormData();
        data.append("data", file);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: 'Basic SLAbc964123-0f17-4824-ac78-c9108549f399TE', // API key
            },
            body: data
        });
    }
}
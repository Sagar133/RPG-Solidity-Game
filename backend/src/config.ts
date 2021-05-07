

export const port = process.env.PORT || 8080;

export const corsUrl = process.env.CORS_URL || "*";

export const environment = process.env.NODE_ENV || "dev"; //else prod

export const slate = {
    collection_id:process.env.COLLECTION_ID || "34073e0b-5ceb-4745-b248-c794403182fb",
    api_key:process.env.API_KEY || "SLAbc964123-0f17-4824-ac78-c9108549f399TE"
}
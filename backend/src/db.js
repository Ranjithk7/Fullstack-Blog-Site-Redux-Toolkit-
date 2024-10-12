import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};
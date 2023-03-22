require('dotenv').config()

const { doesNotMatch } = require('assert');
const { MongoClient } = require('mongodb');

const url = process.env.DB_URI;
const client = new MongoClient(url);
const dbName = process.env.DB_NAME;
const collection_name = process.env.COLLECTION_NAME




const connect_to_db = async function connect_to_DB() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db
}

const db_functions = {

    connect: async () => {
        return await connect_to_db()
    },

    get_all: async (db) => {
        try {
            const collection = db.collection(collection_name);
            const findResults = await collection.find({}).toArray();
            console.log("here", findResults)
            console.log('Found documents =>', findResults.length);
            return {results: findResults, status: 200}
        } catch (error) {
            console.log(`Some error occured ${error}`)
            return {status: 500, error: error}
        }
    },

    add_to_DB: async (db, data) => {
        console.log(data)
        try {
            const collection = db.collection(collection_name);
            const insertResult = await collection.insertOne(data);
            console.log('Inserted documents =>', insertResult);
            return {status: 200}
        } catch (error) {
            console.log(`Some error occured ${error}`)
            return {status: 500, error: error}
        }   
    }
}

module.exports = db_functions

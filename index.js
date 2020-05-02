const express = require('express');
const { MongoClient } = require('mongodb');

const env = require('./src/environment/env');

const app = express();

async function dbConnect(){

    const uri = env.URI;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connection Established');
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
dbConnect();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(env.PORT, () => console.log(`App listening at http://localhost:${env.PORT}`));
const express = require('express');
const { MongoClient } = require('mongodb');

const env = require('./src/environment/env');
const logger = require('./src/utilities/winston-logger');
const db = require('./src/utilities/mongo');

const app = express();

require('./src/routes/routes')(app);

const uri = env.URI;
const client = new MongoClient(uri,{ useUnifiedTopology: true });

db.connect(client);

app.listen(env.PORT, () => logger.info(`App listening at http://localhost:${env.PORT}`));

process.on('SIGINT', async function() {
    db.close(client);
    process.kill(process.pid);
});
const logger = require('../utilities/winston-logger');

async function connect(client){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        logger.info('Connection Established');
    } catch (e) {
        logger.error(e);
    }
}

async function close(client){
    try{
        await client.close();
        logger.info('Connection Closed Successfully')
    } catch(e) {
        logger.error(e)
    }
}

module.exports = {
    connect,
    close
};
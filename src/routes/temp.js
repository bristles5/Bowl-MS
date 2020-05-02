const express = require('express');
const router = express.Router();
const logger = require('../utilities/winston-logger');

router.get('/', (req,res) => {
    try{
        res.status(200).send('Temp Works');
    } catch (e) {
        logger.error(e);
    }
})

module.exports = router;
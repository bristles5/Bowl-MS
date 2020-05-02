const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    try{
        res.status(200).send('Temp2 Works');
    } catch (e) {
        logger.error(e);
    }
});

module.exports = router;
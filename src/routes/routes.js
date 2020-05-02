const express = require('express');
const temp = require('./temp');
const temp2 = require('./temp2');

module.exports = function(app) {
    app.use(express.json());
    app.use('/temp',temp);
    app.use('/temp2',temp2);
}
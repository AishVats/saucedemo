'use strict';

var path = require('path');

var loginData = require(path.resolve('./testData/prod/loginParams.json'));
var testData = require(path.resolve('./testData/prod/testData.json'));


module.exports = {
    loginData: loginData,
    testData: testData
};

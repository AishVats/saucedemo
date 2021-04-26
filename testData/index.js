'use strict';

const NODE_ENV = process.env.NODE_ENV;

console.log('********Running your tests on: ' + NODE_ENV + '********');

switch (NODE_ENV) {

    // add cases as per other environments here
    // add folders same as prod for other environments in testData folder
    case 'prod':
        module.exports = require('./' + NODE_ENV + '/' + NODE_ENV + '.js');
        break;
    default:
        console.error("Unrecognised Environment: " + process.env.NODE_ENV);
        process.exit(1);
}

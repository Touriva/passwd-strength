"use strict";

var passwdStrength = require('./passwd-strength');
var passwords = require('./passwords')

module.exports = function main(passwd) {
    passwd = '' + passwd; // ensure it's a string or our toLowerCase() below will fail.

    if (passwords.includes(passwd)) {
        return 0;
    }

    return passwdStrength(passwd);
};

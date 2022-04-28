"use strict";
exports.__esModule = true;
exports.generateSimple = void 0;
var node_forge_1 = require("node-forge");
var generateSimple = function (bits) { return new Promise((function (resolve, reject) {
    node_forge_1.prime.generateProbablePrime(bits, function (err, num) {
        if (err) {
            reject(err);
            return resolve('');
        }
        return resolve(num);
    });
})); };
exports.generateSimple = generateSimple;

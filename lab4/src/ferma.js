"use strict";
exports.__esModule = true;
exports.isSimple = exports.ferma = void 0;
var big_js_1 = require("big.js");
var ferma = function (n) {
    if (n.mod(2).eq(0))
        return [(0, big_js_1["default"])(2), n.div(2)];
    var b, a = (0, big_js_1["default"])(n).sqrt().round(0, 3);
    if (a.pow(2).eq(n))
        return [a, a];
    while (true) {
        var potential_answer = a.pow(2).minus(n);
        b = (0, big_js_1["default"])(potential_answer).sqrt().round(0, 3);
        if (b.pow(2).eq(potential_answer))
            break;
        a = a.plus(1);
    }
    return [a.minus(b), a.plus(b)];
};
exports.ferma = ferma;
var isSimple = function (n) { return (0, exports.ferma)(n)[0].eq(1); };
exports.isSimple = isSimple;

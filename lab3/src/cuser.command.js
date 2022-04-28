"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.cuser = exports.variant = void 0;
var mongoose_1 = require("mongoose");
var cli_1 = require("./cli");
var users_schema_1 = require("../../virtual-disk/schemas/users.schema");
var errorsHandler_1 = require("./errorsHandler");
var variant;
(function (variant) {
    variant[variant["loginTime"] = 300000] = "loginTime";
    variant[variant["usersCount"] = 8] = "usersCount";
    variant[variant["adminPasswordLength"] = 8] = "adminPasswordLength";
    variant[variant["passwordLength"] = 6] = "passwordLength";
    variant[variant["attempts"] = 2] = "attempts";
    variant[variant["validUser"] = 691200000] = "validUser";
})(variant = exports.variant || (exports.variant = {}));
var cuser = function (state, params) { return __awaiter(void 0, void 0, void 0, function () {
    var done, timerId, allUsers, i, newUserInf;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(state.user.name !== 'admin')) return [3 /*break*/, 2];
                return [4 /*yield*/, errorsHandler_1.errors.PermissionDenied(state.user._id)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!(params.length !== 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, errorsHandler_1.errors.IncorrectParamsLength(state.user._id)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                done = false;
                timerId = setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!!done) return [3 /*break*/, 2];
                                console.log('\nLogin time is passed');
                                return [4 /*yield*/, mongoose_1.connection.close()];
                            case 1:
                                _a.sent();
                                process.exit();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, variant.loginTime);
                return [4 /*yield*/, users_schema_1.UserModel.find({})];
            case 5:
                allUsers = _a.sent();
                if (!(allUsers.length >= variant.usersCount)) return [3 /*break*/, 7];
                return [4 /*yield*/, errorsHandler_1.errors.ExcessNumberOfUsers(state.user._id)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                i = 0;
                _a.label = 8;
            case 8:
                if (!(i < variant.attempts)) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, cli_1.manyQuestions)([
                        { name: 'login', question: 'New user login: ' },
                        { name: 'password', secure: true },
                        { name: 'repeatPassword', secure: true, question: 'Repeat password: ' },
                    ])];
            case 9:
                newUserInf = _a.sent();
                if (newUserInf.password !== newUserInf.repeatPassword) {
                    console.log('Password and repeated password not same');
                    return [3 /*break*/, 11];
                }
                if (newUserInf.login === 'admin' && newUserInf.password.length < variant.adminPasswordLength) {
                    console.log('Password is too short');
                    return [3 /*break*/, 11];
                }
                if (newUserInf.login !== 'admin' && newUserInf.password.length < variant.passwordLength) {
                    console.log('Password is too short');
                    return [3 /*break*/, 11];
                }
                done = true;
                clearTimeout(timerId);
                return [4 /*yield*/, users_schema_1.UserModel.create({
                        name: newUserInf.login,
                        password: newUserInf.password,
                        time: Date.now()
                    })];
            case 10:
                _a.sent();
                return [2 /*return*/];
            case 11:
                i++;
                return [3 /*break*/, 8];
            case 12:
                clearTimeout(timerId);
                done = true;
                console.log('You have exceeded the login limit');
                process.exit();
                return [2 /*return*/];
        }
    });
}); };
exports.cuser = cuser;

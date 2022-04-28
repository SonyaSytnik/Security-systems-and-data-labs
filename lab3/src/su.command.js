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
exports.su = void 0;
var cuser_command_1 = require("./cuser.command");
var mongoose_1 = require("mongoose");
var users_schema_1 = require("../../virtual-disk/schemas/users.schema");
var cli_1 = require("./cli");
var errorsHandler_1 = require("./errorsHandler");
var verifyUserWithRules = function (attempts, time) {
    if (attempts === void 0) { attempts = cuser_command_1.variant.attempts; }
    if (time === void 0) { time = cuser_command_1.variant.loginTime; }
    return __awaiter(void 0, void 0, void 0, function () {
        var done, timerId, i, userData, selectedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                    }); }, time);
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < attempts)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, cli_1.manyQuestions)([
                            { name: 'login', question: 'User login: ' },
                            { name: 'password', secure: true }
                        ])];
                case 2:
                    userData = _a.sent();
                    return [4 /*yield*/, users_schema_1.UserModel.findOne({ name: userData.login, password: userData.password })];
                case 3:
                    selectedUser = _a.sent();
                    if (!selectedUser)
                        console.log('Incorrect login or password');
                    else if (selectedUser.time && Date.now() - selectedUser.time > cuser_command_1.variant.validUser) {
                        console.log('This user\'s password has expired. Contact the administrator for help');
                    }
                    else {
                        done = true;
                        if (selectedUser.time) {
                            console.log('Your password is valid until ' + new Date(selectedUser.time + cuser_command_1.variant.validUser));
                        }
                        return [2 /*return*/, selectedUser];
                    }
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    clearTimeout(timerId);
                    done = true;
                    console.log('You have exceeded the login limit');
                    process.exit();
                    return [2 /*return*/];
            }
        });
    });
};
var su = function (state, params) { return __awaiter(void 0, void 0, void 0, function () {
    var userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(params.length !== 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, errorsHandler_1.errors.IncorrectParamsLength(state.user._id)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4 /*yield*/, verifyUserWithRules()];
            case 3:
                userData = _a.sent();
                state.user = userData;
                state.currentDir = '/';
                return [2 /*return*/];
        }
    });
}); };
exports.su = su;

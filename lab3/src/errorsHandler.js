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
exports.errors = exports.newError = void 0;
var errors_schema_1 = require("../../virtual-disk/schemas/errors.schema");
var newError = function (message, level, userId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, errors_schema_1.ErrorsModel.create({
                    message: message,
                    level: level,
                    user: userId
                })];
            case 1:
                _a.sent();
                console.log('\x1b[33m%s\x1b[0m', message);
                return [2 /*return*/];
        }
    });
}); };
exports.newError = newError;
exports.errors = {
    IncorrectCommand: function (user, command) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)("Incorrect command \"".concat(command, "\""), 0, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    IncorrectParamsLength: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Incorrect params length', 0, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    UnknownPath: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Unknown path', 0, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    PermissionDenied: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Permission denied', 2, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    NotDir: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('This is not a directory!', 3, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    IncorrectAnswer: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Incorrect answer', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    UnknownUser: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Unknown user', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    LoginTimePassed: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Login time is passed', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    ExcessNumberOfUsers: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Excess number of new users', 0, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    PasswordNotSame: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Password and repeated password not same', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    PasswordShort: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Password is too short', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    ExceededLimit: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('You have exceeded the login limit', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    NotFile: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('This is not a file!', 3, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    IncorrectLoginOrPassword: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('Incorrect login or password', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    ExpiredPassword: function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)('This user\'s password has expired. Contact the administrator for help', 1, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); },
    RightNotExist: function (user, right) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.newError)("Right \"".concat(right, "\" does not exist"), 0, user)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); }
};

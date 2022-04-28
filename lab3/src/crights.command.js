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
exports.crights = void 0;
var users_schema_1 = require("../../virtual-disk/schemas/users.schema");
var createFile_1 = require("./createFile");
var cli_1 = require("./cli");
var user_rights_schema_1 = require("../../virtual-disk/schemas/user-rights.schema");
var errorsHandler_1 = require("./errorsHandler");
var ynToBool = function (answer, state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (answer === 'y' || answer === 'Y')
                    return [2 /*return*/, true];
                if (answer === 'n' || answer === 'N')
                    return [2 /*return*/, false];
                return [4 /*yield*/, errorsHandler_1.errors.IncorrectAnswer(state.user._id)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var existUserByLogin = function (login) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, users_schema_1.UserModel.findOne({ name: login })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
var crights = function (state, params) { return __awaiter(void 0, void 0, void 0, function () {
    var lastFile, _a, login, r, w, d, existUser, read, write, del;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(state.user.name !== 'admin')) return [3 /*break*/, 2];
                return [4 /*yield*/, errorsHandler_1.errors.PermissionDenied(state.user._id)];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2:
                if (!(params.length !== 1)) return [3 /*break*/, 4];
                return [4 /*yield*/, errorsHandler_1.errors.IncorrectParamsLength(state.user._id)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [4 /*yield*/, (0, createFile_1.getLastFile)(state.currentDir + params[0])];
            case 5:
                lastFile = _b.sent();
                if (!!lastFile) return [3 /*break*/, 7];
                return [4 /*yield*/, errorsHandler_1.errors.UnknownPath(state.user._id)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [4 /*yield*/, (0, cli_1.manyQuestions)([
                    { name: 'login', question: 'User login: ' },
                    { name: 'r', question: 'Read (y|N): ' },
                    { name: 'w', question: 'Write (y|N): ' },
                    { name: 'd', question: 'Delete (y|N): ' },
                ])];
            case 8:
                _a = _b.sent(), login = _a.login, r = _a.r, w = _a.w, d = _a.d;
                return [4 /*yield*/, existUserByLogin(login)];
            case 9:
                existUser = _b.sent();
                if (!!existUser) return [3 /*break*/, 11];
                return [4 /*yield*/, errorsHandler_1.errors.UnknownUser(state.user._id)];
            case 10:
                _b.sent();
                _b.label = 11;
            case 11: return [4 /*yield*/, ynToBool(r, state)];
            case 12:
                read = _b.sent();
                return [4 /*yield*/, ynToBool(w, state)];
            case 13:
                write = _b.sent();
                return [4 /*yield*/, ynToBool(d, state)];
            case 14:
                del = _b.sent();
                if (!read) return [3 /*break*/, 16];
                return [4 /*yield*/, user_rights_schema_1.UserRightsModel.create({ file: lastFile._id, right: '61ab639fd168adb04fe4086d', user: existUser._id })];
            case 15:
                _b.sent();
                _b.label = 16;
            case 16:
                if (!write) return [3 /*break*/, 18];
                return [4 /*yield*/, user_rights_schema_1.UserRightsModel.create({ file: lastFile._id, right: '61ab63a5be95b034f2ad29ad', user: existUser._id })];
            case 17:
                _b.sent();
                _b.label = 18;
            case 18:
                if (!del) return [3 /*break*/, 20];
                return [4 /*yield*/, user_rights_schema_1.UserRightsModel.create({ file: lastFile._id, right: '61ab63ab9b2b94314e02958e', user: existUser._id })];
            case 19:
                _b.sent();
                _b.label = 20;
            case 20: return [2 /*return*/];
        }
    });
}); };
exports.crights = crights;

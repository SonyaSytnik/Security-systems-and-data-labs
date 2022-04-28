"use strict";
exports.__esModule = true;
exports.KeysModel = exports.KeysSchema = void 0;
var mongoose_1 = require("mongoose");
var schemas_enum_1 = require("./schemas.enum");
exports.KeysSchema = new mongoose_1.Schema({
    public: { type: String, required: true },
    private: { type: String, required: true },
    date: { type: Number, required: true }
});
exports.KeysModel = (0, mongoose_1.model)(schemas_enum_1.ESchemaNames.keys, exports.KeysSchema);

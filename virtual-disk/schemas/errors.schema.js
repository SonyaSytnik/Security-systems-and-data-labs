"use strict";
exports.__esModule = true;
exports.ErrorsModel = exports.ErrorsSchema = void 0;
var mongoose_1 = require("mongoose");
var schemas_enum_1 = require("./schemas.enum");
exports.ErrorsSchema = new mongoose_1.Schema({
    message: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: schemas_enum_1.ESchemaNames.users, required: true },
    level: { type: Number, required: true }
});
exports.ErrorsModel = (0, mongoose_1.model)(schemas_enum_1.ESchemaNames.errors, exports.ErrorsSchema);

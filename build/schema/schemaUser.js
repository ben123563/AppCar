"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: String,
    id: { type: [Number, String] },
    password: String,
    "P.N": Number,
    booked: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Booked',
        }],
});
exports.User = (0, mongoose_1.model)("User", UserSchema);

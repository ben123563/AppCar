"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookedSchema = void 0;
var mongoose_1 = require("mongoose");
exports.BookedSchema = new mongoose_1.Schema({
    destination: { type: String, required: true },
    car: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Car",
    },
    date: {
        start: String,
        end: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});

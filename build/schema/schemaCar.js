"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
var mongoose_1 = require("mongoose");
exports.CarSchema = new mongoose_1.Schema({
    plate: Number,
    type: { type: String, required: true },
    km: { type: String, required: true },
    diffects: [
        {
            type: String,
        },
    ],
    img: String,
    booked: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Booked",
        },
    ],
});

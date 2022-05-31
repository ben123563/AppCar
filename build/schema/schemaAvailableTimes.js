"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableTimesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.availableTimesSchema = new mongoose_1.Schema({
    date: mongoose_1.Schema.Types.Date,
    cars: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Car",
        },
    ],
    availableHours: [
        {
            startHour: String,
            endHour: String,
        },
    ]
});

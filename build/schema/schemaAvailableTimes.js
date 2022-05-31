"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableTimes = void 0;
var mongoose_1 = require("mongoose");
var availableTimes = new mongoose_1.Schema({
    date: mongoose_1.Schema.Types.Date,
    car: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Car",
        },
    ],
    availableHours: [
        {
            startHour: { type: mongoose_1.Schema.Types.Date, required: true },
            endHour: { type: mongoose_1.Schema.Types.Date, required: true },
        },
    ]
});
exports.AvailableTimes = (0, mongoose_1.model)("AvailableTimes", availableTimes);

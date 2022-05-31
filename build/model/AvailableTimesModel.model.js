"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableTimesModel = void 0;
var mongoose = require('mongoose');
var schemaAvailableTimes_1 = require("../schema/schemaAvailableTimes");
var AvailableTimesModel = mongoose.model('AvailableTimes', schemaAvailableTimes_1.availableTimesSchema);
exports.AvailableTimesModel = AvailableTimesModel;

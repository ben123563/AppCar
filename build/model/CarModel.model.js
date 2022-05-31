"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
var mongoose = require('mongoose');
var schemaCar_1 = require("../schema/schemaCar");
var CarModel = mongoose.model('CarModel', schemaCar_1.CarSchema);
exports.CarModel = CarModel;

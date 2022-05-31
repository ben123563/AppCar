"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookedModel = void 0;
var mongoose = require('mongoose');
var schemaBooked_1 = require("../schema/schemaBooked");
var BookedModel = mongoose.model('BookedModel', schemaBooked_1.BookedSchema);
exports.BookedModel = BookedModel;

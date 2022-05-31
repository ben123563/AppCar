"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose = require('mongoose');
var schemaUser_1 = require("../schema/schemaUser");
var UserModel = mongoose.model('UserModel', schemaUser_1.UserSchema);
exports.UserModel = UserModel;

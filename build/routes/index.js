"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var booked_route_1 = __importDefault(require("./booked.route"));
function getRoutes() {
    var router = express.Router();
    router.use('/booked', booked_route_1.default);
    return router;
}
exports.default = getRoutes;

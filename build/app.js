"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
var express = require('express');
//import getRoutes from '../routes/v1/index';
//import { active, catchAsync } from '../middlewares';
//let RedisStore = require('connect-redis')(session);
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var createApp = function () {
    var app = express();
    app.use(express.json());
    app.use((0, cors_1.default)({
        origin: 'http://localhost:4200',
        credentials: true,
        //headers: 'Origin, X-Requested-With, Content-Type,Accept'
    }));
    app.use('/', (0, routes_1.default)());
    return app;
};
exports.createApp = createApp;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
//import * as dotenv from "dotenv";
//dotenv.config({ path: __dirname + '/.env.local' });
//import 'express-async-errors';
//const logger = require('loglevel');
var app_1 = require("./app");
var dbConnection_1 = require("./mongoose/dbConnection");
var startServer = function (port, mongoDB) {
    if (port === void 0) { port = 4200; }
    if (mongoDB === void 0) { mongoDB = 'mongodb+srv://hatal99:Aa123456@hatalrental.uopam.mongodb.net/?retryWrites=true&w=majority'; }
    try {
        (0, dbConnection_1.dbConnect)(mongoDB);
    }
    catch (error) {
        console.log(error);
    }
    var app = (0, app_1.createApp)();
    return new Promise(function (resolve, reject) {
        var server = app.listen(port, function () {
            console.log("Listening at http://localhost:".concat(port, "/"));
            var originalClose = server.close.bind(server);
            server.close = function () {
                return new Promise(function (resolveClose) {
                    originalClose(resolveClose);
                });
            };
            // this ensures that we properly close the server when the program exists
            setupCloseOnExit(server);
            // resolve the whole promise with the express server
            resolve(server);
        });
    });
};
exports.startServer = startServer;
// ensures we close the server in the event of an error.
function setupCloseOnExit(server) {
    // thank you stack overflow
    // https://stackoverflow.com/a/14032965/971592
    function exitHandler(options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, server
                            .close()
                            .then(function () {
                            console.log('Server successfully closed');
                        })
                            .catch(function (e) {
                            console.log('Something went wrong closing the server', e.stack);
                        })];
                    case 1:
                        _a.sent();
                        if (options.exit())
                            process.exit();
                        return [2 /*return*/];
                }
            });
        });
    }
}

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
var AvailableTimesModel_model_1 = require("../model/AvailableTimesModel.model");
var BookedModel_model_1 = require("../model/BookedModel.model");
var CarModel_model_1 = require("../model/CarModel.model");
var UserModel_model_1 = require("../model/UserModel.model");
var ObjectID = require('mongodb').ObjectID;
var newBook = function (newBook) { return __awaiter(void 0, void 0, void 0, function () {
    var newBooked, error_1, user, car, availableTime, avail, date;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newBooked = new BookedModel_model_1.BookedModel(newBook);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newBooked.save()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [4 /*yield*/, UserModel_model_1.UserModel.findOne({ _id: ObjectID(newBook.user) })];
            case 5:
                user = _a.sent();
                user.booked.push(newBooked._id);
                return [4 /*yield*/, UserModel_model_1.UserModel.updateOne({ _id: user._id }, { $set: {
                            booked: user.booked
                        } })];
            case 6:
                _a.sent();
                return [4 /*yield*/, CarModel_model_1.CarModel.findOne({ _id: ObjectID(newBook.car) })];
            case 7:
                car = _a.sent();
                car.booked.push(newBooked._id);
                return [4 /*yield*/, CarModel_model_1.CarModel.updateOne({ _id: car._id }, { $set: {
                            booked: car.booked
                        } })];
            case 8:
                _a.sent();
                return [4 /*yield*/, AvailableTimesModel_model_1.AvailableTimesModel.find({})];
            case 9:
                availableTime = _a.sent();
                for (avail in availableTime) {
                    console.log(typeof (new Date(availableTime[avail].date)));
                    date = "".concat(availableTime[avail].date.date, ".").concat(availableTime[avail].date.getMonth, ".").concat(availableTime[avail].date.getFullYear);
                }
                return [2 /*return*/];
        }
    });
}); };
module.exports = {
    newBook: newBook
};

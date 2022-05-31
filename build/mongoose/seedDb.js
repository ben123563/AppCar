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
exports.deleteDb = exports.addUsers = exports.addAvailableTimes = exports.addCars = void 0;
var CarModel_model_1 = require("../model/CarModel.model");
var AvailableTimesModel_model_1 = require("../model/AvailableTimesModel.model");
var UserModel_model_1 = require("../model/UserModel.model");
var cars = [
    { plate: 20618987, type: 'toyota', img: 'https://www.icar.co.il/_media/images/models/new/toyota/c-hr/new/toyota-c-hr-new-Front.jpg' },
    { plate: 22163211, type: 'hyundai', img: "https://www.hyundaimotors.co.il/wp-content/uploads/2021/10/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%A8%D7%90%D7%A9%D7%99%D7%AA-3.png" },
    { plate: 34129553, type: 'mazda', img: 'https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg' },
    { plate: 67413213, type: "audi", img: 'https://www.audi.co.il/wp-content/uploads/2017/07/%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%A1%D7%93%D7%90%D7%9F-2-1.jpg' },
    { plate: 37032472, type: 'siat', img: 'https://scalethumb.leparking.fr/unsafe/331x248/smart/https://cloud.leparking.fr/2021/04/09/06/33/seat-ibiza-siat-ibiza-diesel-6cv-tdi_8060544250.jpg' },
    { plate: 64826310, type: 'ford', img: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=75' },
    { plate: 52161209, type: 'kia', img: 'https://kia-israel.co.il/wp-content/uploads/2019/12/42637_a_320x164_sg.png' },
    { plate: 23010428, type: 'nissan', img: 'https://cars.usnews.com/static/images/Auto/izmo/i159614887/2022_nissan_altima_angularfront.jpg' },
    { plate: 53280102, type: 'citroen', img: 'https://cdn.motor1.com/images/mgl/rxmAx/s1/nuevo-citroen-c3-asi-es-la-version-brasilena-que-llegara-a-la-argentina.webp' },
    { plate: 10320456, type: 'fiat', img: 'https://cdn.motor1.com/images/mgl/Bqv64/s1/fiat-panda-2020.jpg' }
];
var defaultCar = {
    plate: 0,
    type: "",
    km: '0',
    diffects: [],
    img: "",
    booked: [],
};
var addCars = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _i, car, newCar, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [];
                for (_b in cars)
                    _a.push(_b);
                _i = 0;
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                car = _a[_i];
                defaultCar.plate = cars[car].plate;
                defaultCar.type = cars[car].type;
                defaultCar.img = cars[car].img;
                newCar = new CarModel_model_1.CarModel(defaultCar);
                _c.label = 2;
            case 2:
                _c.trys.push([2, 4, , 5]);
                return [4 /*yield*/, newCar.save()
                    //arrayCar.push(newCar._id)
                ];
            case 3:
                _c.sent();
                return [3 /*break*/, 5];
            case 4:
                error_1 = _c.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.addCars = addCars;
var addAvailableTimes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var availableHours, AvTime, i, defaultAvailable, i, newAvailableTimes, error_2, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                availableHours = [];
                AvTime = [{ startHour: "6:00", endHour: "24:00" }];
                for (i = 0; i <= 10; i++) {
                    availableHours[i] = [];
                    availableHours.push(AvTime);
                }
                _a = {
                    date: new Date()
                };
                return [4 /*yield*/, CarModel_model_1.CarModel.find({})];
            case 1:
                defaultAvailable = (_a.cars = _b.sent(),
                    _a.availableHours = availableHours,
                    _a);
                _b.label = 2;
            case 2:
                _b.trys.push([2, 10, , 11]);
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i <= 60)) return [3 /*break*/, 9];
                newAvailableTimes = new AvailableTimesModel_model_1.AvailableTimesModel(defaultAvailable);
                _b.label = 4;
            case 4:
                _b.trys.push([4, 6, , 7]);
                return [4 /*yield*/, newAvailableTimes.save()];
            case 5:
                _b.sent();
                return [3 /*break*/, 7];
            case 6:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 7];
            case 7:
                defaultAvailable.date.setDate(defaultAvailable.date.getDate() + 1);
                _b.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 3];
            case 9: return [3 /*break*/, 11];
            case 10:
                error_3 = _b.sent();
                console.log("error with find cars");
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.addAvailableTimes = addAvailableTimes;
var addUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var defaultUser, newUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                defaultUser = {
                    name: "ben",
                    id: 213357478,
                    password: "ben123456",
                    "P.N": "0504557270",
                    booked: []
                };
                newUser = new UserModel_model_1.UserModel(defaultUser);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newUser.save()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log("error with user");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addUsers = addUsers;
var deleteDb = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, CarModel_model_1.CarModel.deleteMany({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, AvailableTimesModel_model_1.AvailableTimesModel.deleteMany({})];
            case 2:
                _a.sent();
                return [4 /*yield*/, UserModel_model_1.UserModel.deleteMany({})];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                error_5 = _a.sent();
                console.log("error while deleteing");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteDb = deleteDb;

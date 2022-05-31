"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
// mongoose.set("useCreateIndex", true)
var dbConnect = function (MongoURI) {
    return new Promise(function (resolve, reject) {
        (0, mongoose_1.connect)("".concat(MongoURI), function (err) {
            if (err) {
                reject("error while connecting to db:".concat(err));
            }
            resolve("connected to mongo db at:".concat(MongoURI));
        });
    });
    var db = mongoose_1.connection;
    return db;
};
exports.dbConnect = dbConnect;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}
var calcAvailableTime = function (day) {
};
var rangeHour = function (arrayRange) {
    var newArray = [];
    if (arrayRange.length == 1) {
        return arrayRange[0];
    }
    if (arrayRange.length == 0) {
        return;
    }
    var index = 0;
    var minTime = Number(arrayRange[0].startHour.split(":")[0]);
    for (var i in arrayRange) {
        var time = Number(arrayRange[i].startHour.split(":")[0]);
        if (minTime > time) {
            minTime = time;
            index = Number(i);
        }
        else if (minTime == time && Number(arrayRange[index].endHour.split(":")[0]) < Number(arrayRange[i].endHour.split(":")[0])) {
            minTime = time;
            index = Number(i);
        }
    }
};

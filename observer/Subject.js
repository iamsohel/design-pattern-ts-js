"use strict";
exports.__esModule = true;
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observers.pop();
    };
    Subject.prototype.notifyObserver = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update();
        }
    };
    return Subject;
}());
exports.Subject = Subject;

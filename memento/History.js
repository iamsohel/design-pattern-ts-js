"use strict";
exports.__esModule = true;
exports.History = void 0;
var History = /** @class */ (function () {
    function History() {
        this.states = [];
    }
    History.prototype.push = function (state) {
        this.states.push(state);
    };
    History.prototype.pop = function () {
        return this.states.pop();
    };
    return History;
}());
exports.History = History;

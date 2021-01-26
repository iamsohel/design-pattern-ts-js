"use strict";
exports.__esModule = true;
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group() {
        this.shapes = [];
    }
    Group.prototype.add = function (shape) {
        this.shapes.push(shape);
    };
    Group.prototype.render = function () {
        for (var i = 0; i < this.shapes.length; i++) {
            this.shapes[i].render();
        }
    };
    return Group;
}());
exports.Group = Group;

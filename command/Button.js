"use strict";
exports.__esModule = true;
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(command) {
        this.command = command;
    }
    Button.prototype.click = function () {
        this.command.execute();
    };
    Button.prototype.getLabel = function () {
        return this.label;
    };
    Button.prototype.setLabel = function (label) {
        this.label = label;
    };
    return Button;
}());
exports.Button = Button;

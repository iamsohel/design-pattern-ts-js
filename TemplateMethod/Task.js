"use strict";
exports.__esModule = true;
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(auditTrail) {
        this.auditTrail = auditTrail;
    }
    Task.prototype.execute = function () {
        this.auditTrail.record();
        this.doExecute();
    };
    return Task;
}());
exports.Task = Task;

"use strict";
exports.__esModule = true;
exports.AuditTrail = void 0;
var AuditTrail = /** @class */ (function () {
    function AuditTrail() {
    }
    AuditTrail.prototype.record = function () {
        console.log("audit");
    };
    return AuditTrail;
}());
exports.AuditTrail = AuditTrail;

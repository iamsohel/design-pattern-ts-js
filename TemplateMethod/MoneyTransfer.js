"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MoneyTransfer = void 0;
var AuditTrail_1 = require("./AuditTrail");
var Task_1 = require("./Task");
var MoneyTransfer = /** @class */ (function (_super) {
    __extends(MoneyTransfer, _super);
    function MoneyTransfer() {
        return _super.call(this, new AuditTrail_1.AuditTrail) || this;
    }
    MoneyTransfer.prototype.doExecute = function () {
        console.log("Transfer Money");
    };
    return MoneyTransfer;
}(Task_1.Task));
exports.MoneyTransfer = MoneyTransfer;

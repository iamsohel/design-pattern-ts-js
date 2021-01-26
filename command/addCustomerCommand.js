"use strict";
exports.__esModule = true;
exports.AddCustomerCommand = void 0;
var AddCustomerCommand = /** @class */ (function () {
    function AddCustomerCommand(service) {
        this.service = service;
    }
    AddCustomerCommand.prototype.execute = function () {
        this.service.addCustomer();
    };
    return AddCustomerCommand;
}());
exports.AddCustomerCommand = AddCustomerCommand;

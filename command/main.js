"use strict";
exports.__esModule = true;
var addCustomerCommand_1 = require("./addCustomerCommand");
var Button_1 = require("./Button");
var CustomerService_1 = require("./CustomerService");
var service = new CustomerService_1.CustomerService();
var command = new addCustomerCommand_1.AddCustomerCommand(service);
var button = new Button_1.Button(command);
button.click();

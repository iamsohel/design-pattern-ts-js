"use strict";
exports.__esModule = true;
exports.NotificationServer = void 0;
var AuthToken_1 = require("./AuthToken");
var Connection_1 = require("./Connection");
var NotificationServer = /** @class */ (function () {
    function NotificationServer() {
    }
    NotificationServer.prototype.connect = function (ipAddress) {
        return new Connection_1.Connection();
    };
    NotificationServer.prototype.authenticate = function (appId, key) {
        return new AuthToken_1.AuthToken();
    };
    NotificationServer.prototype.send = function (authToken, message, target) {
        console.log("message send");
    };
    return NotificationServer;
}());
exports.NotificationServer = NotificationServer;

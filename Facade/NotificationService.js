"use strict";
exports.__esModule = true;
exports.NotificationService = void 0;
var Message_1 = require("./Message");
var NotificationServer_1 = require("./NotificationServer");
var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    NotificationService.prototype.send = function (message, target) {
        var server = new NotificationServer_1.NotificationServer();
        var connection = server.connect('ip');
        var authToken = server.authenticate('appId', 'key');
        server.send(authToken, new Message_1.Message(message), target);
        var msg = "send msg " + message + " to " + target;
        console.log(msg);
        connection.disconnect();
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;

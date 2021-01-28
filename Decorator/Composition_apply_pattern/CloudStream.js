"use strict";
exports.__esModule = true;
exports.CloudStream = void 0;
var CloudStream = /** @class */ (function () {
    function CloudStream() {
    }
    CloudStream.prototype.write = function (data) {
        console.log("Storing: ", data);
    };
    return CloudStream;
}());
exports.CloudStream = CloudStream;

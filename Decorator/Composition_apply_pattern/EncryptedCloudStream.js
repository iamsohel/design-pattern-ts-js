"use strict";
exports.__esModule = true;
exports.EncryptedCloudStream = void 0;
var EncryptedCloudStream = /** @class */ (function () {
    function EncryptedCloudStream(stream) {
        this.stream = stream;
    }
    EncryptedCloudStream.prototype.write = function (data) {
        var encrypt = this.encrypt(data);
        this.stream.write(encrypt);
    };
    EncryptedCloudStream.prototype.encrypt = function (data) {
        return 'w39q45uwersoersadf';
    };
    return EncryptedCloudStream;
}());
exports.EncryptedCloudStream = EncryptedCloudStream;

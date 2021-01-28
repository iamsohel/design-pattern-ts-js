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
exports.EncryptedCloudStream = void 0;
var CloudStream_1 = require("./CloudStream");
var EncryptedCloudStream = /** @class */ (function (_super) {
    __extends(EncryptedCloudStream, _super);
    function EncryptedCloudStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EncryptedCloudStream.prototype.write = function (data) {
        var encrypt = this.encrypt(data);
        _super.prototype.write.call(this, encrypt);
    };
    EncryptedCloudStream.prototype.encrypt = function (data) {
        return 'w39q45uwersoersadf';
    };
    return EncryptedCloudStream;
}(CloudStream_1.CloudStream));
exports.EncryptedCloudStream = EncryptedCloudStream;

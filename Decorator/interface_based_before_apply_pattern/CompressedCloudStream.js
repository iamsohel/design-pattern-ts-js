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
exports.CompressedCloudStream = void 0;
var CloudStream_1 = require("./CloudStream");
var CompressedCloudStream = /** @class */ (function (_super) {
    __extends(CompressedCloudStream, _super);
    function CompressedCloudStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompressedCloudStream.prototype.write = function (data) {
        var compress = this.compress(data);
        _super.prototype.write.call(this, compress);
    };
    CompressedCloudStream.prototype.compress = function (data) {
        return data.slice(0, 4);
    };
    return CompressedCloudStream;
}(CloudStream_1.CloudStream));
exports.CompressedCloudStream = CompressedCloudStream;

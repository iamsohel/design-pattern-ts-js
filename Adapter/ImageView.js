"use strict";
exports.__esModule = true;
exports.ImageView = void 0;
var ImageView = /** @class */ (function () {
    function ImageView(image) {
        this.image = image;
    }
    ImageView.prototype.apply = function (filter) {
        filter.apply(this.image);
    };
    return ImageView;
}());
exports.ImageView = ImageView;

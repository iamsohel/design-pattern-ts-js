"use strict";
exports.__esModule = true;
exports.CaramelFilter = void 0;
var CaramelFilter = /** @class */ (function () {
    function CaramelFilter(caramel) {
        this.caramel = caramel;
    }
    CaramelFilter.prototype.apply = function (image) {
        this.caramel.init();
        this.caramel.render(image);
    };
    return CaramelFilter;
}());
exports.CaramelFilter = CaramelFilter;

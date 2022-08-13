//we want to deliver food by car, bicycle..
var DeliveryTypeFactory = /** @class */ (function () {
    function DeliveryTypeFactory() {
    }
    DeliveryTypeFactory.prototype.getDeliveryMethod = function (deliverType) {
        var deliverTypes = {
            car: new DeliveryByCar(),
            bicycle: new DeliveryByBicyle()
        };
        if (deliverType in deliverTypes) {
            return deliverTypes[deliverType];
        }
        else {
            return new DeliveryByCar();
        }
    };
    return DeliveryTypeFactory;
}());
var DeliveryByCar = /** @class */ (function () {
    function DeliveryByCar() {
    }
    DeliveryByCar.prototype.deliver = function (orderId) {
        console.log("Order id ".concat(orderId, " is delivered by Car"));
    };
    return DeliveryByCar;
}());
var DeliveryByBicyle = /** @class */ (function () {
    function DeliveryByBicyle() {
    }
    DeliveryByBicyle.prototype.deliver = function (orderId) {
        console.log("Order id ".concat(orderId, " is delivered by Bicycle"));
    };
    return DeliveryByBicyle;
}());
new DeliveryTypeFactory().getDeliveryMethod('car').deliver('1');
new DeliveryTypeFactory().getDeliveryMethod('bicycle').deliver('5');

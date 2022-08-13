//we want to deliver food by car, bicycle..

class DeliveryTypeFactory {
     getDeliveryMethod(deliverType){
        let deliverTypes = {
            car: new DeliveryByCar(),
            bicycle: new DeliveryByBicyle()
        };
        if(deliverType in deliverTypes){
            return deliverTypes[deliverType];
        } else {
            return  new DeliveryByCar();
        }
    }
   
}

class DeliveryByCar implements DeliverProduct{
    deliver(orderId) {
        console.log(`Order id ${orderId} is delivered by Car`) 
    }
}

class DeliveryByBicyle implements DeliverProduct{
    deliver(orderId) {
        console.log(`Order id ${orderId} is delivered by Bicycle`) 
    }
}

interface DeliverProduct {
    deliver(orderId: string): void;
}



new DeliveryTypeFactory().getDeliveryMethod('car').deliver('1');
new DeliveryTypeFactory().getDeliveryMethod('bicycle').deliver('5');
 
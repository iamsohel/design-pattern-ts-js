//https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basket") ball = new BasketBall();
      ball.roll = function () {
        return `The ${this.type} is rolling.`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this.type = "football";
    this.kick = function () {
      return "You kick the football";
    };
  }
}

class BasketBall {
  constructor() {
    this.type = "basket";
    this.bounce = function () {
      return "You bounce the ball";
    };
  }
}

// creating the obj
const factory = new BallFactory();
const football = factory.createBall("football");
const basket = factory.createBall("basket");

console.log(football.roll());
console.log(football.kick());
console.log(basket.bounce());

//https://www.dofactory.com/javascript/design-patterns/factory-method
/*
A Factory Method creates new objects as instructed by the client.
 One way to create objects in JavaScript is by invoking a constructor function with the new operator.
  There are situations however, where the client does not, or should not, know which one of several
   candidate objects to instantiate. The Factory Method allows the client to delegate object creation 
   while still retaining control over which type to instantiate.

The key objective of the Factory Method is extensibility. 
Factory Methods are frequently used in applications that manage, maintain,
 or manipulate collections of objects that are different but at the same
  time have many characteristics (i.e. methods and properties) in common.
   An example would be a collection of documents with a mix of Xml documents,
    Pdf documents, and Rtf documents.


*/

function Employee() {
  this.createEmployee = function (type) {
    let employee;
    if (type === "fulltime") employee = new FullTime();
    else if (type === "parttime") employee = new PartTime();
    else if (type === "temporary") employee = new Temporary();
    employee.type = type;
    employee.say = function () {
      return this.type + " rate is " + this.hourly + "/hour";
    };
    return employee;
  };
}

function FullTime() {
  this.hourly = "$30";
}
function PartTime() {
  this.hourly = "$15";
}

function Temporary() {
  this.hourly = "$10";
}

const factory2 = new Employee();
const fullTimeEmp = factory2.createEmployee("fulltime");
console.log(fullTimeEmp.say());

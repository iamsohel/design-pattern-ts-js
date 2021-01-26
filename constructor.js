/*Constructor pattern is one of the most commonly used patterns in JavaScript for creating new objects of a given kind.
 */

//function style

function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function () {
    return this.name + " can " + this.specialAbility;
  };
}

const ironMan = new Hero("IronMan", "fly");
const spiderMan = new Hero("SpiderMan", "also fly");
console.log(ironMan.getDetails());
console.log(spiderMan.getDetails());

//class style

class Hero2 {
  constructor(name, specialAbility) {
    this.name = name;
    this.specialAbility = specialAbility;
    this.getDetails = function () {
      return this.name + " can " + this.specialAbility;
    };
  }
}

const machine = new Hero2("Machine", " move");
console.log(machine.getDetails());

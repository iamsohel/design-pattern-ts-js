class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return term1 + term2;
        case "sub":
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}

class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

class AdapterCalculator {
  constructor() {
    const cal = new NewCalculator();
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return cal.add(term1, term2);
        case "sub":
          return cal.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(2, 3, "add"));

const newCalc = new NewCalculator();
console.log(newCalc.add(2, 3));

const adapterCalc = new AdapterCalculator();
console.log(adapterCalc.operations(2, 3, "add"));

/**
 * 
 * This is a structural pattern where the interface of one class is translated into another.
 * This pattern lets classes work together that could not otherwise because of incompatible interfaces.

 This pattern is often used to create wrappers for new refactored APIs so that other existing
 old APIs can still work with them. This is usually done when new implementations or 
 code refactoring (done for reasons like performance gains) result in a different public API,
 while the other parts of the system are still using the old API and need to be adapted to work together.

 In this example, we have an old API, i.e. OldCalculator class, and a new API, i.e. NewCalculator class.
 The OldCalculator class provides an operationmethod for both addition and subtraction, 
 while the NewCalculator provides separate methods for addition and subtraction. 
 The Adapter class CalcAdapterwraps the NewCalculator to add the operation method to
  the public-facing API while using its own addition and subtraction implementation under the hood.
 */

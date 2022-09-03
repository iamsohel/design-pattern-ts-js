// let value = 0;
// console.log(value || 99); //99
// console.log(value ?? 99); //0

let digits = [9];


function plusOne(digits){
   
    // let sum = parseInt(digits.toString(10).split(",").map(Number).join("")) + 1;
    // digits = sum.toString(10).split("").map(Number);
   
    // return digits;
    // Array.from
    let largeInt = BigInt(digits.map(String).join('')) + 1n;

    console.log(String(largeInt).split("").map(Number))
    // return Array.from(String(largeInt), Number)
};

let a = plusOne([1,2,9])
console.log(a)
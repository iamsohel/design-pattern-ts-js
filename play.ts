function plusOne(digits: number[]): number[] {
    let a = digits.reduce((total, num) => total + num) + 1;
    console.log([1,2,3].join(","))
    return a.toString(10).split("").map(Number)
};

let a = plusOne([1,9])
console.log(a)
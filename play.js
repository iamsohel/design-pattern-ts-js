function plusOne(digits) {
    var a = digits.reduce(function (total, num) { return total + num; }) + 1;
    console.log([1, 2, 3].join(","));
    return a.toString(10).split("").map(Number);
}
;
var a = plusOne([1, 9]);
console.log(a);

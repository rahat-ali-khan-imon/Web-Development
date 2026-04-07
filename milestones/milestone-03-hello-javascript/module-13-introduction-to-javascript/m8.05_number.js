var first = 0.1;
var second = 0.2;

var total = first + second;
console.log("total 0.1 + .2 : ", total);

var first = 0.3;
var second = 0.2;

var total1 = first + second;
console.log("total1 0.3 + 0.2 : ", total1);


var first = 0.6;
var second = 0.2;

var total2 = first + second;
console.log("total2 0.6 + 0.2 : ", total);


var first = 0.1;
var second = 0.2;

var total3 = first + second;
console.log("total3 0.1 + 0.2 : ", total3.toFixed(5));   // toFixed(5)
console.log("total3 0.1 + 0.2 : ", total3.toFixed(2));
console.log(typeof total3.toFixed(1));
console.log();

const num = 50 / 0;
console.log(num)
console.log(-50 / 0)
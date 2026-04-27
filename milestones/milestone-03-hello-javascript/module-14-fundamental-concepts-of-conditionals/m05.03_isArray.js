const friends =  ['Alice', 'Nila', 'Rafi', 'Kalik', 'Ali'];
console.log(friends);

const nums = [];
const food = 'ros o gol la';
const age =  63;

console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));
console.log(Array.isArray(age));
console.log();



// Array কি না চেক করা — Array.isArray()

let fruits = ["Apple", "Banana"];
let name = "Rahim";

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(name));   // false

// Array কি না safely check করার best way।
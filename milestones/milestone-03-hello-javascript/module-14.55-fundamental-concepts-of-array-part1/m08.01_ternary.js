const age = 20;
// Normal if-else
if(age >= 18) {
    console.log("You can vote.");
} else {
    console.log("Ghumai thako");
}
console.log();


// Simple ternary
age >= 18 ? console.log("Vote Dio") : console.log("Ghumai thako");
console.log();


let price = 500;
const isLeader = false;

if(isLeader === true) {
    price = 0;
} else {
    price = price + 100;
}

console.log(price);
console.log();


price = 300;
price = isLeader === true ? 0 : price + 100;
console.log(price)
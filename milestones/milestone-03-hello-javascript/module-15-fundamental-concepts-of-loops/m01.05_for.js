// Using string concatenation
let output = '';

for (let i = 1; i <= 5; i++) {
    output += i + ' ';  // Add space between numbers
}

console.log(output);
console.log(typeof output);


// Using Array + join()
let numbers = [];

for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log(numbers.join(' '));  // Join elements with space
console.log(typeof numbers);


// Node.js Specific: process.stdout.write()
for (let i = 1; i <= 5; i++) {
    process.stdout.write(i + ' ');
}


// 💡 Recommendation:
// Browser এর জন্য → string concatenation / join()
// Node.js console এর জন্য → process.stdout.write()
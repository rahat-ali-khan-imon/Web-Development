// Using slice() (Classic Way)

const numbers = [1, 2, 3];
const copy = numbers.slice();  // Copy using slice()

// Change first element
copy[0] = 99;

console.log("Original:", numbers);
console.log("Copy:", copy);


/*
.slice() without arguments returns a new array copy
Works same as spread operator
*/
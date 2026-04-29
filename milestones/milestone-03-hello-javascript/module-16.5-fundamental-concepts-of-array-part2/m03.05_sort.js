const numbers = [4, 7, 12, 8, 38, 6, 1];

const numbers_asc = numbers.sort(function(a, b) {return a - b});
const numbers_dsc = numbers.sort(function(a, b) {return b - a});

console.log(numbers_asc);  // Original array change: first ascending, then descending (asc == desc).
console.log(numbers_dsc);
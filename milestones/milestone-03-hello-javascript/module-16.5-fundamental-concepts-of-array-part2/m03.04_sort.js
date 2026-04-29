const numbers = [4, 7, 12, 8, 38, 6, 1];
const numbers_asc = numbers.sort(function(a, b) {return a - b});    // original array change

console.log(numbers_asc);
console.log(numbers);
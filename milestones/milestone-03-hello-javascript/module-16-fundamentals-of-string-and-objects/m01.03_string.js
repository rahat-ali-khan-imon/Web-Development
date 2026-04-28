const numbers = [10, 20, 30, 40, 50];

console.log(numbers);
numbers[1] = 100;       // array is mutable --->> you can change the array elements
console.log(numbers);


const capital = 'Dha ka';

console.log(capital);
capital[3] = 'Q';       // string is immutable --->> not changeable
console.log(capital);
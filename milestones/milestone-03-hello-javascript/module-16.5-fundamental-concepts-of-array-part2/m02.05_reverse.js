const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = numbers.length - 1; i >= 0; i--) {
    // console.log(numbers[i]);
    const num = numbers[i];
    console.log(num);
}

const rev_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    rev_numbers.push(num);
}
console.log(rev_numbers);
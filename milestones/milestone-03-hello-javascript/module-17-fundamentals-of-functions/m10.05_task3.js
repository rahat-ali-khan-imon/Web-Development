/*
Write a function called make_avg() which will take an array of integers and the size of 
that array and return the average of those values.
*/

function make_avg(numbers) {
    let size = numbers.length;
    let sum = 0;
    for(const number of numbers) {
        sum += number;
    }
    return sum / size;
}

const array = [10, 20, 30, 40, 50];
const result = make_avg(array);

console.log("Average:", result);



/*
⚠️ Important Corner Cases
1️⃣ Empty Array 😬
    make_avg([]);

👉 size = 0
👉 sum / 0 = NaN


Better Handle:
if (numbers.length === 0) {
    return "Array cannot be empty";
}
*/
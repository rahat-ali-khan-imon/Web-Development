/*
💎 Better Version (Safe & Clean)
Professional code এ আমরা manually size pass করি না।
কারণ array এর already .length আছে।
*/

function make_avg(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid Input";
    }

    let sum = 0;

    for (let num of arr) {
        if (!Number.isInteger(num)) {
            return "Array must contain integers only";
        }
        sum += num;
    }

    return sum / arr.length;
}

const numbers = [10, 20, 30, 40];
const result = make_avg(numbers);

console.log(result);
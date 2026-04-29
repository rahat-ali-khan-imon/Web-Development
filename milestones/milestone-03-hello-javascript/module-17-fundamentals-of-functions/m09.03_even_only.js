/**
 * Create function that will return only the even numbers
 * return the sum of even numbers
*/

function evenNumbersOnly(numbers) {
    let evens = [];
    for(const number of numbers) {
        if(number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbs = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbs);
console.log("Even numbers are", evens);
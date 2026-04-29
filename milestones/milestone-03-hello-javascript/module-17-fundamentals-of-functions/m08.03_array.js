/*
Objective: write a function to give me the sum of all numbers in an array.
Step-1: declare a function
Step-2: call check whether the function is called properly
Step-3: set a parameter(s)
Step-4: pass the parameter(s), check whether parameter is passed in a proper format
Step-5: do the function task(step by step)
*/

function sumOfNumbers(numbers) {
    for(const number of numbers) {
        console.log(number);
    }
}

const numbs = [10, 20, 30, 40, 50];
const sum = sumOfNumbers(numbs);
console.log("Sum of numbers is", sum);
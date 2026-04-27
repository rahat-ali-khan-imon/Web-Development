/**
 * Checking if it's an Array
Instructions:
1. Create different variables, each containing either an array or a non-array value.
2. Now use isArray to check if each variable is an array.
3. Print a message to the console indicating whether each variable is an array or not.
*/

// Different variables
let fruits = ['apple', 'banana', 'mango'];   // Array
let age = 63;                                // Number
let name = "Rahim";                          // String
let isStudent = true;                        // Boolean
let cities = ['Dhaka', 'Chittagong'];        // Array

// Checking each variable
if (Array.isArray(fruits)) {
    console.log("fruits is an Array");
} else {
    console.log("fruits is NOT an Array");
}

if (Array.isArray(age)) {
    console.log("age is an Array");
} else {
    console.log("age is NOT an Array");
}

if (Array.isArray(name)) {
    console.log("name is an Array");
} else {
    console.log("name is NOT an Array");
}

if (Array.isArray(isStudent)) {
    console.log("isStudent is an Array");
} else {
    console.log("isStudent is NOT an Array");
}

if (Array.isArray(cities)) {
    console.log("cities is an Array");
} else {
    console.log("cities is NOT an Array");
}
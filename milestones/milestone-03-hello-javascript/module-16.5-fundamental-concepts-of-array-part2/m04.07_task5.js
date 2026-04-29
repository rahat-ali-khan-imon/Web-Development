/*
Copy the given array into another array so that changing the copy does not affect the original.
Change the first element of the copied array to 99.
Input: [1, 2, 3]

Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3]
*/


// Using Spread Operator (Modern & Easy)

const numbers = [1, 2, 3];
const copy = [...numbers];  // Copy array using spread operator

// Change first element of copied array
copy[0] = 99;

// Print both arrays
console.log("Original:", numbers);
console.log("Copy:", copy);


/*

🧠 Explanation (Line by Line)

🔹 const copy = [...numbers];
[...] is the spread operator
It creates a new array and copies all elements
Important: This is a shallow copy → changes in copy do not affect original array*/
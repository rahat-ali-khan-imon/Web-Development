/**
 * Checking Array Membership with ‘includes’
Instructions:
1. Create an array of books containing different book.
2. Use the includes method to check if the array contains a JavaScript book.
3. Print a message to the console indicating whether the element is present in the array or not.
*/

let books = [
    'Bangla Grammar',
    'English for Today',
    'Physics Basic',
    'JavaScript',
    'Math Advanced'
];

if(books.includes('JavaScript')) {
    console.log("JavaScript book is present in the array.");
} else {
    console.log("JavaScript book is NOT present in the array.");
}
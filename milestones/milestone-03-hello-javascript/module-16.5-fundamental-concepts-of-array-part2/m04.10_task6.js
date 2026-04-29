/*
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]

Expected Array:
[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// Update second row (index 1) first item (index 0)
arr[1][0] = 99;

// Print updated array
console.log(arr);
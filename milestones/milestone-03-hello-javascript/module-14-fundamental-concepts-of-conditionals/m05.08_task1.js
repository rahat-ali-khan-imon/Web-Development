/**
 * Declare an array
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array
*/

let fruits = ['apple', 'banana', 'mango', 'cherry', 'watermelon'];

console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);



/**
 * let fruits = ['apple', 'banana', 'mango', 'cherry', 'watermelon'];

👉 Index শুরু হয় 0 থেকে
| Position (গণনা) | Index | Value      |
| --------------- | ----- | ---------- |
| 1st             | 0     | apple      |
| 2nd             | 1     | banana     |
| 3rd             | 2     | mango      |
| 4th             | 3     | cherry     |
| 5th             | 4     | watermelon |


🔹 তাহলে কেন 3 আর 2 ব্যবহার করেছি?
✅ console.log(fruits[3]);

Index 3 মানে 4th position
Output হবে:
    cherry


✅ fruits[2] = "jambura";

Index 2 মানে 3rd position
মানে "mango" কে replace করছে।


🧠 গুরুত্বপূর্ণ বিষয়
যদি প্রশ্নে লেখা থাকে:
console log the 3rd index element

তাহলে 3rd index মানে index = 3
মানে 4th position

কিন্তু যদি লেখা থাকে:
console log the 3rd element
তাহলে সেটা index = 2 হবে।


🎯 Short Rule মনে রাখো
    Position - 1 = Index

Example:
3rd element → 3 - 1 = 2 index
4th element → 4 - 1 = 3 index


🔥 So answer:

আমি 3 ব্যবহার করেছি কারণ সেটা 4th element
আমি 2 ব্যবহার করেছি কারণ সেটা 3rd element
*/
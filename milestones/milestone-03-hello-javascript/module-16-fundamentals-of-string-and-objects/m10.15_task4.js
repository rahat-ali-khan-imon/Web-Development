// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace 
// a character in a string.

/**
 * 🟢 Question বুঝি
👉 যদি string এ small x থাকে → সেটা small y দিয়ে replace করতে হবে
👉 যদি string এ capital X থাকে → সেটা capital Y দিয়ে replace করতে হবে

মানে:
small x → small y
capital X → capital Y
*/

let str = "eXample xylophone";
let result = "";
console.log(str);

for(let char of str) {
    if(char === 'x') {
        result += 'y';
    } else if(char === 'X') {
        result += 'Y';
    } else {
        result += char;
    }
}

console.log(result);
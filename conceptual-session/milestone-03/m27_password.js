/* Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
1. Length must be at least 8
2. Must contain at least 1 number
3. Must contain at least 1 uppercase letter
4. Must not contain spaces

Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }

Test case 2
Input:  "Hello123"
Output: { valid: true, reasons: []
*/

function checkPassword(password) {
    console.log(password);
}

const output = "helloWorld";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
// Using replaceAll() (Simple & Clean)

let str = "eXample xylophone";

let result = str
    .replaceAll('x', 'y')
    .replaceAll('X', 'Y');

console.log(result);

/**
 * 🧠 Explanation
1. .replaceAll('x', 'y') → সব small x কে y বানাবে
2. .replaceAll('X', 'Y') → সব capital X কে Y বানাবে
3. String immutable → তাই result নতুন variable এ রাখছি
*/
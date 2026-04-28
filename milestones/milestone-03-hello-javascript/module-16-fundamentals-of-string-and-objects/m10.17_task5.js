// Capitalize Every first Letter of each word in a String

let str = "hello world form javascript";
let words = str.split(" ");
console.log(words);

let result = "";
for(let word of words) {
    result += word[0].toUpperCase();
}
console.log(result);

let ans = "";
for(let word of words) {
    ans += word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(ans);
// Method 1: split() + reverse() + join() (Most Popular) -->> এটা সবচেয়ে বেশি ব্যবহৃত method 

let text = "I Love JavaScript";

let reversed = text.split('').reverse().join('');
console.log(reversed);
// Check whether a string contains all the vowels a, e, i, o, u
// মানে string এর ভিতরে ৫টা vowel একবার হলেও থাকতে হবে।

let str = "educAtion".toLowerCase();
console.log(str);
let vowels = ['a', 'e', 'i', 'o', 'u'];

let hasAll = true;

for(let vowel of vowels) {
    if(!str.includes(vowel)) {
        hasAll = false;
        break;
    }
}

console.log(hasAll);
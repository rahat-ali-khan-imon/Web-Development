// Count how many times a string has the letter a or A

let str = "banAnaA";
let count = 0;

let lowerStr = str.toLowerCase();

for (let char of lowerStr) {
    if (char === 'a') {
        count++;
    }
}

console.log(count);
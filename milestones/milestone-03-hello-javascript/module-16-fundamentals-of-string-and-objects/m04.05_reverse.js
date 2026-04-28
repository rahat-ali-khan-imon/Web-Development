// Method 2: for loop দিয়ে

let text = "I Love JavaScript";
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}

console.log(reversed);
// 3️⃣ Reverse a String (Important Trick)
let str = "JavaScript";

console.log(str.split(''));
console.log(str.split('').reverse());
console.log(str.split('').reverse().join(''));

let reversed = str.split('').reverse().join('');

console.log(reversed);

/*
🧠 কারণ:
String এ reverse() নেই
তাই split → reverse → join করতে হয়
*/
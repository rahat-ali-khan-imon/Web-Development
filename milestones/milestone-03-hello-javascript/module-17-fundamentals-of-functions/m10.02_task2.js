/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is 
even divide it by two and return the result.
*/

function numberEvenOdd(num) {
    if(num % 2 === 0) {
        return num / 2;
    }
    return num * 2;
}

const result = numberEvenOdd(10);
const ans = numberEvenOdd(13);

console.log(result);
console.log(ans);
console.log(numberEvenOdd(3.5));



/*
⚠️ Important Corner Cases
1️⃣ Decimal Number
    numberEvenOdd(3.5);

👉 3.5 % 2 = 1.5
👉 So odd ধরে multiply করবে → 7

কিন্তু mathematically 3.5 even/odd না 😅
*/


// Better:
function numberEvenOdd(number) {
    if (!Number.isInteger(number)) {
        return "Please enter an integer";
    }

    return number % 2 === 0 
        ? number / 2 
        : number * 2;
}

numberEvenOdd("10");

// JS auto convert করতে পারে
// But professional code এ explicit conversion better।
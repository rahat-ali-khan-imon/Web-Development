// 💎 Best Practice Version (With Validation)

function odd_even(num) {
    num = Number(num);  // এটা num কে Number type এ convert করছে। মানে type coercion manually করতেছি।

    if (!Number.isInteger(num)) {
        return "Invalid Input";
    }

    return num % 2 === 0 ? "Even" : "Odd";
}

const result = odd_even(10);
const ans = odd_even(13);

console.log(result);
console.log(ans);
console.log(odd_even(0));
console.log(odd_even(3.5));
console.log(odd_even("10"));
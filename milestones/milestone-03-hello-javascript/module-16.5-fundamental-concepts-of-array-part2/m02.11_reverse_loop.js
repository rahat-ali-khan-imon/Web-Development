// 6️⃣ Reverse Loop Alternative (Logic Practice)

let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}

console.log(reversed);


/**
 *⚠ Important Behavior
❌ reverse() String এ কাজ করে না
    "hello".reverse(); // Error

⚠ reverse() original array change করে

🎯 Key Points
1. reverse() শুধু array method
2. original array modify করে
3. string reverse করতে → split().reverse().join()
4. spread operator দিয়ে safe reverse করা যায়
5. nested array এ শুধু outer reverse হয়
*/
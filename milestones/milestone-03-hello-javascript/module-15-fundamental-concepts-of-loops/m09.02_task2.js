// Find all the odd numbers from 61 to 100.

for(let i = 61; i <= 100; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
console.log();


for (let i = 61; i <= 100; i += 2) {
    console.log(i);
}
// Different ways to use loop

// Odd numbers 
console.log("Odd number:")
console.log("i % 2 != 0")
for(let i = 1; i <= 10; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

console.log("i % 2 === 1");
for(let i = 1; i <= 10; i++) {
    if(i % 2 === 1) {
        console.log(i);
    }
}

console.log("i % 2 !== 0");
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}
function multiply(x, y) {  // x, y = parameters
  return x * y;
}

const x = multiply(4, 5); // 4, 5 = arguments
console.log("x: ", x);



// Argument Missing
const y =  multiply(4);
console.log("y: ", y);
/*
👉 y হবে undefined
👉 Result হবে NaN

Why?
4 * undefined = NaN
*/



// ✅ Better Way:
function multiply1(x = 0, y = 0) {
  return x * y;
}

// Extra Argument
const z = multiply1(2, 3, 4, 5);
console.log("z: ", z);

/*
👉 extra argument ignore হয়ে যাবে
JS only declared parameters নেয়।
*/
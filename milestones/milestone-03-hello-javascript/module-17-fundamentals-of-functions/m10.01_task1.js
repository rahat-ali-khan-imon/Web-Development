// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  return (a * b * c * d);
}

const result = multiply(2, 3, 4, 5);
console.log(result);



// ✅ Better Version (Default Parameter)
function multiply(a = 1, b = 1, c = 1, d = 1) {
  return a * b * c * d;
}

console.log(multiply(10, 20, 30, 40));
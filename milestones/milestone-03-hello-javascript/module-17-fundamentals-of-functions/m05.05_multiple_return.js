// Important Example 3: Multiple Return (Conditional)

function numberType(num) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
}

const result = numberType(63)
console.log(result);

const ans = numberType(-23);
console.log(ans);

const output = numberType(0);
console.log(output);

/*
✔ Clean
✔ Readable
✔ Early exit
*/
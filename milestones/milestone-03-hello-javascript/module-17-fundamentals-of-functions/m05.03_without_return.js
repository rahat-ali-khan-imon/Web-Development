// Important Example 1: Without Return

function sum(a, b) {
  a + b;
}

const r = sum(2, 3);
console.log(r);

/*
👉 Output: undefined

⚠️ কারণ return লেখা হয়নি।
JS default ভাবে undefined return করে।
*/
// Corner Case 1: Return newline problem

function test() {
  return
  5;
}

/*
👉 Output: undefined
⚠️ কারণ JS automatic semicolon insert করে।
*/



// Correct way:
function test() {
  return 5;
}



// or
function test() {
  return (
    5
  );
}



// Corner Case 2: Return inside loop
function findFirstEven(arr) {
  for (let num of arr) {
    if (num % 2 === 0) {
      return num;
    }
  }
  return null;
}
// 👉 First match পেলেই function stop।
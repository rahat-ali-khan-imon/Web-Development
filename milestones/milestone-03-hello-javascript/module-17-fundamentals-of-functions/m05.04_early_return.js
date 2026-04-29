// Important Example 2: Early Return

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Allowed";
}

const result = checkAge(16);
console.log(result);

// 👉 If condition true হলে function সাথে সাথে stop হয়ে যায়।
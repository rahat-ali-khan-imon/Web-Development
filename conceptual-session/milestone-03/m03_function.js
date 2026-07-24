let num1 = 50;
let num2 = 100;

let sum = num1 + num2;
console.log(sum);

if(sum % 2 === 0) {
  console.log("Yes this even number");
  console.log("I do something");
} else {
  console.log("Yes this is odd number");
  console.log("I do something");
}
console.log();


function checkEvenSumThenDoSomething(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  if (sum % 2 == 0) {
    console.log("Yes this is even number");
    console.log("I do something");
  } else {
    console.log("No this is odd number");
    console.log("I do something");
  }
}

checkEvenSumThenDoSomething(num1, num2);
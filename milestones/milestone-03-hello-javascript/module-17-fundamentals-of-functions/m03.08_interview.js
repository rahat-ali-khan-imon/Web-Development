// Real Interview Type Example

function withdraw(balance, amount = 0, fee = 0) {
  const total = amount + fee;

  if (total > balance) {
    return "Insufficient Balance";
  }

  return balance - total;
}

const result = withdraw(2000, 1500, 1700);
console.log(result);

/*
💎 Best Practice Summary

✔ 1-2 parameter → normal parameter
✔ Optional parameter → default value
✔ Unknown count → ...rest
✔ Many config → object destructuring
✔ Avoid arguments (old style)
*/
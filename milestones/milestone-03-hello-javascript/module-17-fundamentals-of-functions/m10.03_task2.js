// ✅ Better Version (Validate Integer)

function processNumber(num) {
  if (!Number.isInteger(num)) {
    return "Please enter an integer number";
  }

  return num % 2 === 0 ? num / 2 : num * 2;
}

const result = processNumber("6");
console.log(result);

// ✔ Decimal handle করছে
// ✔ Cleaner
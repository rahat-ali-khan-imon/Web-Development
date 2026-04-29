// Extra Argument দিলে কী হয়

function add(a, b, c) {
  return a + b + c;
}

const x = add(1, 2, 3, 4); // 6
console.log(x);

/*
👉 Extra argument ignore হয়ে যাবে (normal function এ)
JS automatically only declared parameters নেয়।
*/
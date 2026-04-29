// Important Example 4: Return Object

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

const user = createUser("Rahim", 25);
console.log(user);

// 👉 Return শুধু number/string না, object, array, function — সবই হতে পারে।
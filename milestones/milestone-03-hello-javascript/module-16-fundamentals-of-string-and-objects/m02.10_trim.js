// Why trim is Important?

let password = "admin";
let userInput = " admin ";

if (userInput.trim() === password) {
    console.log("Login successful");
}

// না হলে login fail করতো।
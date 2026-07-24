function checkPassword(password) {
    let len = password.length;
    let hasUpperCase = false;                                       //
    let hasNumber = false;
    
    for(let i = 0; i < len; i++) {
        let character = password[i];
        console.log(character);
    }
}

const output = "helloWorld";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
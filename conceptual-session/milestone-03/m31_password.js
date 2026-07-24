function checkPassword(password) {
    let len = password.length;
    let hasUpperCase = false;
    let hasNumber = false;

    for(let i = 0; i < len; i++) {
        let character = password[i];

        if(character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }

    console.log(password, len, hasNumber, hasUpperCase);
    
    return {                                                                //
        valid: true / false,
        reasons: []
    }
}

const output = "helloWorld";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
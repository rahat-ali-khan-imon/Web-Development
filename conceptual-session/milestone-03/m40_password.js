function checkPassword(password) {
    let len = password.length;
    let hasUpperCase = false;
    let hasNumber = false;
    let reasons = [];
    let hasSpace = password.includes(" ");

    for(let i = 0; i < len; i++) {
        let character = password[i];

        if(character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }

    if(!hasNumber) {
        reasons.push("Missing Number");
    }
    if(!hasUpperCase) {
        reasons.push("Missing Uppercase");
    }
    if(hasSpace) {
        reasons.push("Space Found!!!");
    }

    let isValid = reasons.length == 0;                                            //
    
    return {
        valid: isValid,
        reasons
    }
}

const output = "hello123World";
console.log(checkPassword(output));
console.log();

console.log(checkPassword("Hello 123"));
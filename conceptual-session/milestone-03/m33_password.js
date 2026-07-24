function checkPassword(password) {
    let len = password.length;
    let hasUpperCase = false;
    let hasNumber = false;
    let reasons = [];

    for(let i = 0; i < len; i++) {
        let character = password[i];

        if(character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if(character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }

    if(len < 8) {
        reasons.push("Must be at least 8 characters")                                      //
    }
    if(!hasNumber) { 
        reasons.push("Missing number");
    }
    if(!hasUpperCase) {
        reasons.push("Missing Uppercase");
    }
    
    return {
        valid: true,
        reasons
    }
}

const output = "hWorld";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
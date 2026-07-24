function checkPassword(password) {
    let len = password.length;
    let hasUpperCase = false;
    let hasNumber = false;
    let reasons = [];
    let hasSpace = password.includes(" ");                                  //

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

    console.log("Space:", hasSpace);                                    //
    
    return {
        valid: true,
        reasons
    }
}

const output = "hello World";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
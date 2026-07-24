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

    if(!hasNumber) {
        reasons.push("Missing Number");
    }
    if(!hasUpperCase) {
        reasons.push("Missing Uppercase");
    }

    console.log("Space:", password.includes(" "));                              //
    
    return {
        valid: true,
        reasons
    }
}

const output = "helloWorld";
console.log(checkPassword(output));

console.log(checkPassword("Hello123"));
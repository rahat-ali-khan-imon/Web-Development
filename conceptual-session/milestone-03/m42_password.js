function checkPassword(password) {
    let reasons = [];

    // Rule 1: Length check
    if (password.length < 8) {
        reasons.push("length must be at least 8");
    }

    // Rule 2: Number check
    if (!/[0-9]/.test(password)) {
        reasons.push("missing number");
    }

    // Rule 3: Uppercase check
    if (!/[A-Z]/.test(password)) {
        reasons.push("missing uppercase letter");
    }

    // Rule 4: Space check
    if (password.includes(" ")) {
        reasons.push("must not contain spaces");
    }

    return {
        valid: reasons.length === 0,
        reasons: reasons
    };
}

console.log(checkPassword("helloWorld"));
console.log(checkPassword("Hello123"));
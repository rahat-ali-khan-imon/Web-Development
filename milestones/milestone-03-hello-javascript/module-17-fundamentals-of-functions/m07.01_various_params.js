/*
for a given string tell me whether it has even number of character or not
*/

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0) {
        console.log("Even size");
        return true;
    } else {
        console.log("Odd size");
        return false;
    }
}

evenSizedString("JavaScript");
evenSizedString("Hello World");
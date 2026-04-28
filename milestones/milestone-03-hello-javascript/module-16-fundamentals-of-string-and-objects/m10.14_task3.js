let str = "education".toLowerCase();

if (
    str.includes('a') &&
    str.includes('e') &&
    str.includes('i') &&
    str.includes('o') &&
    str.includes('u')
) {
    console.log("Contains all vowels");
} else {
    console.log("Does not contain all vowels");
}
const sentence = 'I am learning Web Dev';
console.log(sentence);

// Shortcut
const reversed = sentence.split('');
console.log(reversed);

const reversed2 = sentence.split('').reverse();
console.log(reversed2);

const reversed3 = sentence.split('').reverse().join();
console.log(reversed3);

const reversed4 = sentence.split('').reverse().join('');   // empty string
console.log(reversed4);
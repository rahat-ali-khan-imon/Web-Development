/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'

Output:
'person working hard a am I'
*/

const statement = 'I am a hard working person'

const words = statement.split(' ');
const reverseWords = words.reverse();
const result = reverseWords.join(' ');

console.log(result);
console.log(statement);
console.log(statement.split(' ').reverse().join(' '));
/** Problem 6: PhoneBook Prefix Search
Function name: searchByPrefix(phoneBook, prefix)

Statement:
Return an array of names that start with the given prefix.

Test case 1
Input:
phoneBook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";

Output:
["rahim", "rafi"]


Test case 2
Input:
phoneBook = { mina: "013", mim: "014", rina: "015" };
prefix = "mi";

Output:
["mina", "mim"]
*/

function searchByPrefix(phoneBook, prefix) {
    console.log(phoneBook);
    console.log(prefix);
}

const phoneBook = { rahim: "0181", karim: "0172", rafi: "0193" };
const prefix = "ra";

console.log(searchByPrefix(phoneBook, prefix));
console.log(searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "mi"));
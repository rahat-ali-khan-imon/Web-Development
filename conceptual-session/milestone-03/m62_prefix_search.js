// Better Solution (Dynamic prefix)

function searchByPrefix(phoneBook, prefix) {
    const result = [];

    for (const name in phoneBook) {
        if(name.startsWith(prefix)) {
            result.push(name);
        }
    }
    
    return result;
}

const phoneBook1 = { rahim: "0181", karim: "0172", rafi: "0193" };
console.log(searchByPrefix(phoneBook1, "ra"));

const phoneBook2 = { mina: "013", mim: "014", rina: "015" };
console.log(searchByPrefix(phoneBook2, "mi"));
console.log(searchByPrefix(phoneBook2, "rin"));
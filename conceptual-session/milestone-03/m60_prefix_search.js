function searchByPrefix(phoneBook, prefix) {
    let prefixSearch = [];

    for(const item in phoneBook) {
        let startPre = item.slice(0, 2);
        if(startPre === prefix) {
            prefixSearch.push(item)
        }
    }
    
    return prefixSearch;
}

const phoneBook = { rahim: "0181", karim: "0172", rafi: "0193" };
const prefix = "ra";

console.log(searchByPrefix(phoneBook, prefix));
console.log(searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "mi"));
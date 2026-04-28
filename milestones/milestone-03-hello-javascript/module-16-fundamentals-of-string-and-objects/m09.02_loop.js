const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
};

// for of: array
// for in: object
for(const key in mobile) {
    // console.log(mobile.key);   // undefined
    console.log(key);
}
console.log();


for(const key in mobile) {
    console.log(mobile[key]);  // values property
}
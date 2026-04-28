const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
};

const keys = Object.keys(mobile);
console.log(keys);          // keys is array

for(const key of keys) {
    console.log(key, ':', mobile[key]);
}
const drink = ' water';
const liquid = '   water  ';       // white space

if(drink === liquid) {
    console.log('Pani er opor nam Life.');
} else {
    console.log('Somudre pani ase khaite pari na.');
}


if(drink.trim() === liquid.trim()) {
    console.log('Pani er opor nam Life.');
} else {
    console.log('Somudre pani ase khaite pari na.');
}
// Create element and set innerText or innerHTML
const newChile = document.createElement('li');
newChile.innerText = 'New born baby footballer';

// Find the parent where you will and the child
const playerList = document.getElementById('player-list');

// Append the child to the parent
playerList.appendChild(newChile);                                        /* */
console.log('Third JS');



// Get the parent
const thirdList = document.getElementById('third-list');

// Create the Child
const li = document.createElement('li');
li.innerText = 'Brand new list item';

thirdList.appendChild(li);
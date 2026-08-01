// Parent Node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// Create Chile Node
const placesSection = document.createElement('section'); 
console.log(placesSection);

// Creat h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

// Creat ul
const ul = document.createElement('ul');
console.log(ul);

// Create li
const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
console.log(li1);
ul.appendChild(li1);                             /* ul cannot be seen */

// Append placesSection to the mainContainer
mainContainer.appendChild(placesSection);
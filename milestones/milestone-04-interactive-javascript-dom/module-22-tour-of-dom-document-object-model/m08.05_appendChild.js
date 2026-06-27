// Parent Node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// Create Chile Node
const placesSection = document.createElement('section');

// Creat h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

// Creat ul
const ul = document.createElement('ul');                        /* ul cannot be seen */

// Create li
const li1 = document.createElement('li');                       /* li cannot be seen */
li1.innerText = 'bandorbon';

// Append placesSection to the mainContainer
mainContainer.appendChild(placesSection);
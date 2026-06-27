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
const ul = document.createElement('ul');

// Create li
const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');                           /* */
li2.innerText = 'sundorbon';
ul.appendChild(li2);


placesSection.appendChild(ul);

// Append placesSection to the mainContainer
mainContainer.appendChild(placesSection);
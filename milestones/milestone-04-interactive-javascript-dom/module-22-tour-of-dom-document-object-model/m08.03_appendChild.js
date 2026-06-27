// Parent Node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// Create Chile Node
const placesSection = document.createElement('section');     

// Creat h1
const h1 = document.createElement('h1');                                /* */
h1.innerText = 'Places I want to visit';

// Append placesSection to the mainContainer
mainContainer.appendChild(placesSection);
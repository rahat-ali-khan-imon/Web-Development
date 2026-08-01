// Parent Node
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// Create Chile Node
const placesSection = document.createElement('section'); 
console.log(placesSection);    

// Creat h1
const h1 = document.createElement('h1');                                /* */
h1.innerText = 'Places I want to visit';
console.log(h1);

// Append placesSection to the mainContainer
mainContainer.appendChild(placesSection);
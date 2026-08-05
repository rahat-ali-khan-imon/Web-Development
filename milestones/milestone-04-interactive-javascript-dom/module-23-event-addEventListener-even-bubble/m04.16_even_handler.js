document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitleElement = document.getElementById('page-title');
        console.log(pageTitleElement);
        pageTitleElement.innerText = 'Updated page title text';
    }
);

document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerText = 'User Logged in Successfully';
    }
);

// Step 1: Set even listener
document.getElementById('btn-update')
    .addEventListener('click', function () {
        // Step 2: Get the text from the input filed
        const nameInput = document.getElementById('input-name');
        const name = nameInput.value;
        console.log('Name:', name);

        // Step 2: Set the name
        const nameParagraph = document.getElementById('name');
        nameParagraph.innerText = name;
    }
);
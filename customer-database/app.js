/* Go ahead and grab the body. We're gonna need this later. */
const body = document.querySelector('body');
/* Create a container to hold all of our new elements */
const container = document.createElement('section');

/* Add one person to the DOM. Going to call this multiple times. */
function addPerson(who) {
    const personBox = document.createElement('div');
    personBox.classList.add('person'); // for styling purposes

    personBox.innerHTML = `
        <img src="${who.picture.large}">
        <div class="intro">
            <h2>${who.name.first} ${who.name.last}</h2>
            <p>${who.email}</p>
        </div>
        <div class="location">
            <p>${who.location.street}</p>
            <p>${who.location.city}, ${who.location.state} ${who.location.postcode}</p>
            <p>${who.phone}</p>
        </div>
        <p class="ssn">${who.id.value}</p>
    `;

    container.appendChild(personBox);
}

const peeps = customers.results; /* just so we don't have to type as much */

/* Actually generate the DOM elements */
for (let i = 0; i < peeps.length; i++) {
    addPerson(peeps[i]);
}

// Add the new container to the <body>
body.appendChild(container);
import { populateList } from "./populate.js";


const populateAddListButton = function() {

    const content = document.querySelector('#content');

    const addListButton = document.createElement('button');
    addListButton.classList.add('addListButton');
    addListButton.textContent = 'Add List';
    addListButton.addEventListener('click', populateList);
    content.appendChild(addListButton);
}

export { populateAddListButton };
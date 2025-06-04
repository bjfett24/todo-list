import { listOfLists } from "./list-of-lists.js";
import { populateList } from "./populate.js";

document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);
    

    for (list of listOfLists.getListOfLists()) {
        const listDisplay = document.createElement('div');
        listDisplay.classList.add('list', 'display');
        content.appendChild(listDisplay);

        const listHeader = document.createElement('div');
        listHeader.classList.add('list', 'header');
        listHeader.textContent = list.getName();
        listDisplay.appendChild(listHeader);

        const listDesc = document.createElement('div');
        listDesc.classList.add('list', 'description');
        listDesc.textContent = `${list.getTodos().length} items`;
        listDisplay.appendChild(listDesc);


    }

    const addListButton = document.createElement('button');
    addListButton.classList.add('addListButton');
    addListButton.textContent = 'Add List';
    addListButton.addEventListener('click', populateList);
    content.appendChild(addListButton);

})


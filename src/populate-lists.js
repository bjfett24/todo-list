import { List } from "./list.js";
import { listOfLists } from "./list-of-lists.js";
import { Todo } from "./todo-class.js";
import { reloadContent } from "./content-reload.js";
import { populateAddListButton } from "./populate-add-list-button.js";
import { deleteList } from "./delete-list.js";
import { populateTodos } from "./populate-todos.js";



const populateListOfLists = function() {
    const content = reloadContent();
    content.classList.add('list');

    const listPageHead = document.createElement('div');
    listPageHead.classList.add('page', 'header');
    listPageHead.textContent = 'Your To-Do Lists';
    content.appendChild(listPageHead);

    const listContainer = document.createElement('div');
    listContainer.classList.add('list', 'container');
    content.appendChild(listContainer);


    //console.log(listOfLists.getListOfLists());
    
    for (let l of listOfLists.getListOfLists()) {
        const listDisplay = document.createElement('div');
        listDisplay.classList.add('list', 'display');
        listDisplay.role = 'button';
        listDisplay.addEventListener('click', function() {
            populateTodos(l);
        });
        listContainer.appendChild(listDisplay);

        const listHeader = document.createElement('div');
        listHeader.classList.add('list', 'header');
        listHeader.textContent = l.getName();
        listDisplay.appendChild(listHeader);

        const listDesc = document.createElement('div');
        listDesc.classList.add('list', 'description');
        listDesc.textContent = `${l.getTodos().length} item(s)`;
        listDisplay.appendChild(listDesc);

        const xButton = document.createElement('button');
        xButton.classList.add('list', 'delete');
        xButton.textContent = '𝘅'
        xButton.addEventListener('click', function(event) {
            deleteList(this, l);
            event.stopPropagation();
        })
        listDisplay.appendChild(xButton);

    }
    const addListButton = populateAddListButton();
    listContainer.appendChild(addListButton);

}


export { populateListOfLists };
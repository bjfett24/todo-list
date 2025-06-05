import { List } from "./list.js";
import { addListToList } from "./add-list.js";
import { listOfLists } from "./list-of-lists.js";
import { Todo } from "./todo-class.js";
import { addTodoToList } from "./add-todo.js";
import { reloadContent } from "./content-reload.js";
import { populateAddListButton } from "./populate-add-list-button.js";
import { deleteList } from "./delete-list.js";


const populateListOfLists = function() {
    const content = document.querySelector('#content');

    console.log(listOfLists.getListOfLists());
    
    for (let l of listOfLists.getListOfLists()) {
        const listDisplay = document.createElement('div');
        listDisplay.classList.add('list', 'display');
        content.appendChild(listDisplay);

        const listHeader = document.createElement('div');
        listHeader.classList.add('list', 'header');
        listHeader.textContent = l.getName();
        listDisplay.appendChild(listHeader);

        const listDesc = document.createElement('div');
        listDesc.classList.add('list', 'description');
        listDesc.textContent = `${l.getTodos().length} items`;
        listDisplay.appendChild(listDesc);

        const xButton = document.createElement('button');
        xButton.classList.add('list', 'delete');
        xButton.textContent = '𝘅'
        xButton.addEventListener('click', function() {
            deleteList(this, l);
        })
        listDisplay.appendChild(xButton);

    }

}

const populateList = function() {

    const content = reloadContent();
    content.classList.add('list');


    const newList = new List('Canada Trip');
//Edit out later
    const newTodo = new Todo('Gather fishing gear', 'go around the house and collect all of the fishing rods and organize the bait', 'july 1st');
    addTodoToList(newList, newTodo);
/**/

    addListToList(newList);


    populateListOfLists();

    populateAddListButton();

}

export { populateList, populateListOfLists };
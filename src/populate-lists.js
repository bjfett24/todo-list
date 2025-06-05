import { List } from "./list.js";
import { addListToList } from "./add-list.js";
import { listOfLists } from "./list-of-lists.js";
import { Todo } from "./todo-class.js";
import { addTodoToList } from "./add-todo.js";
import { reloadContent } from "./content-reload.js";
import { populateAddListButton } from "./populate-add-list-button.js";
import { deleteList } from "./delete-list.js";
import { populateTodos } from "./populate-todos.js";


const populateListOfLists = function() {
    const content = reloadContent();
    content.classList.add('list');

    //console.log(listOfLists.getListOfLists());
    
    for (let l of listOfLists.getListOfLists()) {
        const listDisplay = document.createElement('div');
        listDisplay.classList.add('list', 'display');
        listDisplay.role = 'button';
        listDisplay.addEventListener('click', function() {
            populateTodos(l);
        });
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
    const addListButton = populateAddListButton();
    content.appendChild(addListButton);

}

/*const populateList = function() {

    const content = reloadContent();
    content.classList.add('list');


    const newList = new List('Canada Trip');
//Edit out later
    const newTodo = new Todo('Gather fishing gear', 'go around the house and collect all of the fishing rods and organize the bait', 'july 1st');
    addTodoToList(newList, newTodo);


    addListToList(newList);


    populateListOfLists();

    populateAddListButton();

}*/



const addListDialog = function() {
    const popUp = document.createElement('dialog');
    popUp.classList.add('popUp');
    document.body.appendChild(popUp);

    const dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialogContainer');
    popUp.appendChild(dialogContainer);

    const listForm = document.createElement('form');
    listForm.classList.add('listForm');
    listForm.action = '#';
    listForm.method = 'dialog';
    dialogContainer.appendChild(listForm);

    const titleLabel = document.createElement('label');
    titleLabel.classList.add('title', 'label');
    titleLabel.for = 'title';
    titleLabel.textContent = 'What is the title of your new list?';
    listForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.classList.add('title', 'input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    listForm.appendChild(titleInput);

    const createButton = document.createElement('button');
    createButton.type = 'submit';
    createButton.classList.add('createButton')
    createButton.textContent = 'Create';
    listForm.appendChild(createButton);

    listForm.addEventListener('submit', () => {
        const title = titleInput.value;

        if (title) {
            const newList = new List(title);
            addListToList(newList);
            populateListOfLists();
            popUp.close(); // Close the dialog
        } else {
            const messageBox = document.createElement('div');
            messageBox.style.cssText = `
                position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
                background-color: #ffdddd; color: #d8000c; padding: 10px 20px;
                border: 1px solid #d8000c; border-radius: 5px; z-index: 1001;
                font-family: sans-serif;
            `;
            messageBox.textContent = 'Please fill in a value for the Title.';
            document.body.appendChild(messageBox);
            setTimeout(() => {
                messageBox.remove();
            }, 3000); // Remove after 3 seconds
        }
    })

    popUp.showModal();
}


export { /*populateList, */populateListOfLists, addListDialog };
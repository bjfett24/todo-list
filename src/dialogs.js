import { Todo } from "./todo-class.js";
import { populateTodos } from "./populate-todos.js";
import { addTodoToList } from "./add+rem-todo.js";
import { List } from "./list.js";
import { addListToList } from "./add+rem-list.js";
import { populateListOfLists } from "./populate-lists.js";
import { convertDate } from "./convert-dates.js";


const addTodoDialog = function (thisList) {
    const popUp = document.createElement('dialog');
    popUp.classList.add('popUp');
    document.body.appendChild(popUp);

    const dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialogContainer');
    popUp.appendChild(dialogContainer);

    const todoForm = document.createElement('form');
    todoForm.classList.add('todoForm');
    todoForm.action = '#';
    todoForm.method = 'dialog';
    dialogContainer.appendChild(todoForm);

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('name', 'label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'New To-Do Item Name';
    todoForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.classList.add('name', 'input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    todoForm.appendChild(nameInput);

    const descLabel = document.createElement('label');
    descLabel.classList.add('description', 'label');
    descLabel.for = 'description';
    descLabel.textContent = 'Description';
    todoForm.appendChild(descLabel);

    const descInput = document.createElement('input');
    descInput.classList.add('description', 'input');
    descInput.type = 'text';
    descInput.id = 'description';
    todoForm.appendChild(descInput);

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('date', 'label');
    dateLabel.for = 'date';
    dateLabel.textContent = 'Due Date:';
    todoForm.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.classList.add('date', 'input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    todoForm.appendChild(dateInput);

    const createButton = document.createElement('button');
    createButton.type = 'submit';
    createButton.classList.add('createButton')
    createButton.textContent = 'Create';
    todoForm.appendChild(createButton);

    todoForm.addEventListener('submit', () => {
        const name = nameInput.value;
        const desc = descInput.value;
        const date = convertDate(dateInput.value);


        if (name.length > 0) {
            const newTodo = new Todo(name, desc, date);
            addTodoToList(thisList, newTodo);
            populateTodos(thisList);
            popUp.close(); // Close the dialog
        } else {
            const messageBox = document.createElement('div');
            messageBox.style.cssText = `
                position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
                background-color: #ffdddd; color: #d8000c; padding: 10px 20px;
                border: 1px solid #d8000c; border-radius: 5px; z-index: 1001;
                font-family: sans-serif;
            `;
            messageBox.textContent = 'Please fill in a value for the Name of your To-Do item.';
            document.body.appendChild(messageBox);
            setTimeout(() => {
                messageBox.remove();
            }, 3000); // Remove after 3 seconds
        }
    })

    popUp.showModal();
}

const editTodoDialog = function(thisList, thisTodo) {
    const popUp = document.createElement('dialog');
    popUp.classList.add('popUp');
    document.body.appendChild(popUp);

    const dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialogContainer');
    popUp.appendChild(dialogContainer);

    const todoForm = document.createElement('form');
    todoForm.classList.add('todoForm');
    todoForm.action = '#';
    todoForm.method = 'dialog';
    dialogContainer.appendChild(todoForm);

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('name', 'label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'New To-Do Item Name';
    todoForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.classList.add('name', 'input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.value = thisTodo.getName();
    todoForm.appendChild(nameInput);

    const descLabel = document.createElement('label');
    descLabel.classList.add('description', 'label');
    descLabel.for = 'description';
    descLabel.textContent = 'Description';
    todoForm.appendChild(descLabel);

    const descInput = document.createElement('input');
    descInput.classList.add('description', 'input');
    descInput.type = 'text';
    descInput.id = 'description';
    descInput.value = thisTodo.getDescription();
    todoForm.appendChild(descInput);

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('date', 'label');
    dateLabel.for = 'date';
    dateLabel.textContent = 'Due Date:';
    todoForm.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.classList.add('date', 'input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    dateInput.value = thisTodo.getDate();
    todoForm.appendChild(dateInput);

    const createButton = document.createElement('button');
    createButton.type = 'submit';
    createButton.classList.add('createButton')
    createButton.textContent = 'Create';
    todoForm.appendChild(createButton);

    todoForm.addEventListener('submit', () => {
        const name = nameInput.value;
        const desc = descInput.value;
        const date = dateInput.value;


        if (name.length > 0) {
            thisTodo.changeName(name);
            thisTodo.changeDescription(desc);
            thisTodo.changeDate(date);
            populateTodos(thisList);
            popUp.close(); // Close the dialog
        } else {
            const messageBox = document.createElement('div');
            messageBox.style.cssText = `
                position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
                background-color: #ffdddd; color: #d8000c; padding: 10px 20px;
                border: 1px solid #d8000c; border-radius: 5px; z-index: 1001;
                font-family: sans-serif;
            `;
            messageBox.textContent = 'Please fill in a value for the Name of your To-Do item.';
            document.body.appendChild(messageBox);
            setTimeout(() => {
                messageBox.remove();
            }, 3000); // Remove after 3 seconds
        }
    })

    popUp.showModal();
}

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

export { editTodoDialog, addTodoDialog, addListDialog };
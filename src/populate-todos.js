import { addTodoToList } from "./add-todo.js";
import { reloadContent } from "./content-reload.js"
import { List } from "./list.js";
import { Todo } from "./todo-class.js";
import { populateAddTodoButton } from "./populate-add-todo-button.js";
import { deleteList } from "./delete-list.js";
import { deleteTodo } from "./delete-todo.js";
import { todoToggleComplete, completeSymbol, completeButtonStyle } from "./toggle-complete.js";

const populateTodos = function(thisList) {
    const content = reloadContent();
    content.classList.add('todo');

    const todoPageHead = document.createElement('div');
    todoPageHead.classList.add('page', 'header');
    todoPageHead.textContent = thisList.getName();
    content.appendChild(todoPageHead);

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo', 'container');
    content.appendChild(todoContainer);

    const todos = thisList.getTodos();

    for (let t of todos) {
        const currentTodo = document.createElement('div');
        currentTodo.classList.add('todo', 'display');
        todoContainer.appendChild(currentTodo);

        const todoName = document.createElement('div');
        todoName.classList.add('todo', 'name');
        todoName.textContent = t.getName();
        currentTodo.appendChild(todoName);

        const todoDesc = document.createElement('div');
        todoDesc.classList.add('todo', 'description');
        todoDesc.textContent = t.getDescription();
        currentTodo.appendChild(todoDesc);

        const todoDate = document.createElement('div');
        todoDate.classList.add('todo', 'date');
        todoDate.textContent = t.getDate();
        currentTodo.appendChild(todoDate);

        const todoComplete = document.createElement('button');
        todoComplete.classList.add('todo', 'complete');
        completeButtonStyle(todoComplete, t);
        todoComplete.textContent = completeSymbol(t);
        todoComplete.addEventListener('click', function() {
            todoToggleComplete(this, t);
        });
        currentTodo.appendChild(todoComplete);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo', 'deleteButton');
        deleteButton.textContent = '🗑️';
        deleteButton.addEventListener('click', function() {
            deleteTodo(this, thisList, t);
        })
        currentTodo.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.classList.add('todo', 'editButton');
        editButton.textContent = 'edit ✏';
        editButton.addEventListener('click', function() {
            editTodoDialog(thisList, t);
        })
        currentTodo.appendChild(editButton);
    }

    const addTodoButton = populateAddTodoButton(thisList);
    todoContainer.appendChild(addTodoButton);


}



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
    dateInput.type = 'text';
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
        const date = dateInput.value;


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
    dateInput.type = 'text';
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

export { populateTodos, addTodoDialog }
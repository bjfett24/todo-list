import { reloadContent } from "./content-reload.js"
import { List } from "./list.js";
import { Todo } from "./todo-class.js";
import { populateAddTodoButton } from "./populate-add-todo-button.js";
import { deleteTodo } from "./delete-todo.js";
import { todoToggleComplete, completeSymbol, completeButtonStyle } from "./toggle-complete.js";
import { editTodoDialog } from "./dialogs.js";
import { populateListOfLists } from "./populate-lists.js";

const populateTodos = function(thisList) {
    const content = reloadContent();
    content.classList.add('todo');

    const todoPageHead = document.createElement('div');
    todoPageHead.classList.add('page', 'header');
    todoPageHead.textContent = thisList.getName();
    content.appendChild(todoPageHead);

    const backButton = document.createElement('button');
    backButton.classList.add('backButton');
    backButton.textContent = 'Your Lists';
    backButton.addEventListener('click', function() {
        populateListOfLists();
    })
    content.appendChild(backButton);

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

export { populateTodos }
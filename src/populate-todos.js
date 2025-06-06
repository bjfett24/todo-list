import { reloadContent } from "./content-reload.js"
import { List } from "./list.js";
import { Todo } from "./todo-class.js";
import { populateAddTodoButton } from "./populate-add-todo-button.js";
import { deleteTodo } from "./delete-todo.js";
import { todoToggleComplete, completeSymbol, completeButtonStyle } from "./toggle-complete.js";
import { editTodoDialog } from "./dialogs.js";
import { populateListOfLists } from "./populate-lists.js";
import { TodoCard } from "./expand-todo.js";

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
        const newTodoCard = new TodoCard(t, thisList);
        newTodoCard.populateCardDisplay();
        newTodoCard.populateMinCard();
    }

    const addTodoButton = populateAddTodoButton(thisList);
    todoContainer.appendChild(addTodoButton);


}

export { populateTodos }
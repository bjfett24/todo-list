import { addTodoDialog } from "./populate-todos.js";


const populateAddTodoButton = function(thisList) {

    const content = document.querySelector('#content');

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('addTodoButton');
    addTodoButton.textContent = 'Add To-Do Item';
    addTodoButton.addEventListener('click', function() {
        addTodoDialog(thisList);
    });
    content.appendChild(addTodoButton);
}

export { populateAddTodoButton };
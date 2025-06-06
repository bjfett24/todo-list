import { reloadContent } from "./content-reload.js"
import { List } from "./list.js";
import { Todo } from "./todo-class.js";
import { populateAddTodoButton } from "./populate-add-todo-button.js";
import { populateListOfLists } from "./populate-lists.js";
import { TodoCard } from "./expand-todo.js";
import { SVG } from "./create-svg-element.js";

const populateTodos = function(thisList) {
    const content = reloadContent();
    content.classList.add('todo');

    const todoPageHead = document.createElement('div');
    todoPageHead.classList.add('page', 'header');
    content.appendChild(todoPageHead);

    const pageHeadText = document.createElement('div');
    pageHeadText.classList.add('page', 'head', 'text');
    pageHeadText.textContent = thisList.getName();
    todoPageHead.appendChild(pageHeadText);

    const backButton = document.createElement('button');
    backButton.classList.add('backButton');
    backButton.addEventListener('click', function() {
        populateListOfLists();
    })
    content.appendChild(backButton);

    const backArrowIcon = new SVG('backArrowIcon', '0 0 24 24', "M18,11V13H10L13.5,16.5L12.08,17.92L6.16,12L12.08,6.08L13.5,7.5L10,11H18M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z")
    const backArrowElement = backArrowIcon.createSVG();
    backButton.appendChild(backArrowElement);


    const backButtonText = document.createElement('div');
    backButtonText.classList.add('backButtonText');
    backButtonText.textContent = 'Your Lists';
    backButton.appendChild(backButtonText);



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
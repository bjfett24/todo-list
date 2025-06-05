import { listOfLists } from "./list-of-lists.js";
import { populateList, populateListOfLists } from "./populate.js";
import { List } from "./list.js";
import { Todo } from './todo-class.js';
import { addTodoToList } from "./add-todo.js";
import { addListToList } from "./add-list.js";
import { populateAddListButton } from "./populate-add-list-button.js";

document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.id = 'content';
    content.classList.add('list');
    body.appendChild(content);


    const newList = new List('New York Trip');
    //Edit out later
    const newTodo = new Todo('Gather swimming gear', 'get anything you are going to want when sitting next to the pool: sunglasses, swimsuit, goggles.', 'july 5th');
    addTodoToList(newList, newTodo);

    addListToList(listOfLists, newList);
    

    populateListOfLists();

    populateAddListButton()

})


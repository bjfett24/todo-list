import { populateListOfLists } from "./populate-lists.js";
import { List } from "./list.js";
import { Todo } from './todo-class.js';
import { addTodoToList } from "./add+rem-todo.js";
import { addListToList } from "./add+rem-list.js";

//listOfLists.addList({name : 'name', todo: ['Blue', 'green', 'red']});
//console.log(listOfLists.getListOfLists());


document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.id = 'content';
    content.classList.add('list');
    body.appendChild(content);


    const newList = new List('New York Trip');
    //Edit out later
    const newTodo = new Todo('Gather swimming gear', 'get anything you are going to want when sitting next to the pool: sunglasses, swimsuit, goggles.', 'July 5th');
    addTodoToList(newList, newTodo);

    //console.log(newList.getTodos());

    addListToList(newList);

    //console.log(listOfLists.getListOfLists());
    

    populateListOfLists();

})


/* WHAT THINGS DOES THIS PROJECT DO 

Display
    todo list display with items on it

    page that shows all the individual lists: this could also just be a sidebar popout thing

    buttons that can edit the lists and edit the items 

    some kind of title header

    buttons to add new list or add new item 

    main page that displays all lists

Logic 
    functions:
        create new list item:
            this is an object that will have various properties 
        edit pre-existing list item:
            change date
            change description
            change title
            change priority
        mark list item as complete
        delete pre-existing list item

        
        create new list
            this will be an object that has the properties of name, color theme, and an array of todo items
        edit list:
            name
            color theme?
        delete list
        enter list

        */


import './styles.css';

import { Todo } from './todo-class.js';

import { List } from './list.js';

import { addTodoToList } from './add-todo.js';

import { removeTodoFromList } from './remove-todo.js';

import { listOfLists } from './list-of-lists.js';

import { addListToList } from './add-list.js';

import { removeListFromList } from './remove-list.js';

import './page-load.js';

import { populateList } from './populate.js';

import { reloadContent } from './content-reload.js';

import { populateAddListButton } from './populate-add-list-button.js';


/*const newTodo = new Todo('Wash Car', 'Clean your car thoroughly', 'march 5th');

const newList = new List('Before I leave for vacay');

console.log(newList.getName());

newList.changeName('After I come back from vacay');

console.log(newList.getName());

addTodoToList(newList, newTodo);

console.log(newList.getTodos());

addListToList(listOfLists, newList);

//console.log(listOfLists.getListOfLists());

removeListFromList(listOfLists, newList);

console.log(listOfLists.getListOfLists());*/











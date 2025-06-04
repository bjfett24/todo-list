import { List } from "./list.js";
import { addListToList } from "./add-list.js";
import { listOfLists } from "./list-of-lists.js";
import { Todo } from "./todo-class.js";
import { addTodoToList } from "./add-todo.js";

const populateList = function() {
    const newList = new List('Canada Trip');
//Edit out later
    const newTodo = new Todo('Gather fishing gear', 'go around the house and collect all of the fishing rods and organize the bait', 'july 1st');
    addTodoToList(newList, newTodo);
/**/

    addListToList(listOfLists, newList);
}

export { populateList };
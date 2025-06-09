import { List } from "./list.js";
import { setStorage } from "./set-storage.js";
import { listOfLists } from "./list-of-lists.js";

const addTodoToList = function(listObj, todoObj) {
    listObj.addTodo(todoObj);
    setStorage();
}

const removeTodoFromList = function(listObj, todoObj) {
    listObj.removeTodo(todoObj);
    setStorage();
}

export { addTodoToList, removeTodoFromList };

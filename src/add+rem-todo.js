import { List } from "./list.js";

const addTodoToList = function(listObj, todoObj) {
    listObj.addTodo(todoObj);
}

const removeTodoFromList = function(listObj, todoObj) {
    listObj.removeTodo(todoObj);
}

export { addTodoToList, removeTodoFromList };

import { listOfLists } from "./list-of-lists.js";

const addListToList = function(listOfTodos) {
    listOfLists.addList(listOfTodos);
}

const removeListFromList = function(listOfTodos) {
    listOfLists.removeList(listOfTodos);
}

export { addListToList, removeListFromList };
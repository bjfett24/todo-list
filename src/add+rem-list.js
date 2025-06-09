import { listOfLists } from "./list-of-lists.js";
import { setStorage } from "./set-storage.js";

const addListToList = function(listOfTodos) {
    listOfLists.addList(listOfTodos);
    setStorage();
}

const removeListFromList = function(listOfTodos) {
    listOfLists.removeList(listOfTodos);
    setStorage();
}

export { addListToList, removeListFromList };
import { removeTodoFromList } from "./add+rem-todo.js";

const deleteTodo = function(thisButton, thisList, thisTodo) {
    const parentDisplay = thisButton.parentNode;
    parentDisplay.remove();

    removeTodoFromList(thisList, thisTodo);


}

export { deleteTodo };
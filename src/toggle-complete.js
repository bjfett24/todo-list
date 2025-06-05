import { Todo } from "./todo-class.js";

const todoToggleComplete = function(thisButton, thisTodo) {
    thisTodo.toggleComplete();

    if (thisTodo.getComplete() === true) {
        thisButton.style.backgroundColor = 'green';

    } else {
        thisButton.style.backgroundColor = 'grey';

    }

    thisButton.textContent = completeSymbol(thisTodo);
}

const completeSymbol = function(todo) {
    if (todo.getComplete() === true) {
        return 'Done ✔️';
    } else if (todo.getComplete() === false) {
        return 'Not Done 𝐗';
    } else {
        return 'ERROR';
    }
}

const completeButtonStyle = function(thisButton, todo) {
    if (todo.getComplete() === true) {
        thisButton.style.backgroundColor = 'green';
    } else {
        thisButton.style.backgroundColor = 'grey';
    }
}

export { todoToggleComplete, completeSymbol, completeButtonStyle };
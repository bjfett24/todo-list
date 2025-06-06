import { Todo } from "./todo-class.js";
import { deleteTodo } from "./delete-todo.js";
import { todoToggleComplete, completeSymbol, completeButtonStyle } from "./toggle-complete.js";
import { editTodoDialog } from "./dialogs.js";
import { SVG } from "./create-svg-element.js";

class TodoCard {
    constructor(todoObj, thisList) {
        this.name = todoObj.getName();
        this.description = todoObj.getDescription();
        this.date = todoObj.getDate();
        this.isComplete = todoObj.getComplete();
        this.isExpanded = false;
        this.todo = todoObj;
        this.list = thisList;
        this.card = undefined
    }

    getThisTodo() {
        return this.todo;
    }

    getThisList() {
        return this.list
    }

    toggleIsExpanded() {
        if (this.isExpanded === false) {
            this.isExpanded = true;
        } else if (this.isExpanded === true) {
            this.isExpanded = false;
        }
    }

    resetIsExpanded() {
        this.isExpanded = false;
    }


    cardWipe() {
        while (this.card.firstChild) {
            this.card.removeChild(this.card.firstChild);
        }
    }



    onCardClick() {
        this.toggleIsExpanded();
        this.changeCardSize();
    }

    changeCardSize() {
        if (this.isExpanded === true) {
            this.cardWipe();
            this.populateMaxCard();
        } else if (this.isExpanded === false) {
            this.cardWipe();
            this.card.addEventListener('click', () => {
                this.onCardClick();
            })
            this.populateMinCard();

        }
    }

    populateCardDisplay() {
        const todoContainer = document.querySelector('.todo.container');

        const currentTodo = document.createElement('div');
        currentTodo.addEventListener('click', () => {
            this.onCardClick();
        })
        todoContainer.appendChild(currentTodo);

        this.card = currentTodo;
    }

    populateMinCard() {
        const thisTodo = this.getThisTodo();

        const currentTodo = this.card;
        currentTodo.classList.remove('max');
        currentTodo.classList.add('todo', 'display', 'min');
        currentTodo.addEventListener('click', this.onCardClick);

        const todoName = document.createElement('div');
        todoName.classList.add('todo', 'name');
        todoName.textContent = this.name;
        currentTodo.appendChild(todoName);

        const todoDate = document.createElement('div');
        todoDate.classList.add('todo', 'date');
        todoDate.textContent = this.date;
        currentTodo.appendChild(todoDate);

        const todoComplete = document.createElement('button');
        todoComplete.classList.add('todo', 'complete');
        completeButtonStyle(todoComplete, this.todo);
        todoComplete.textContent = completeSymbol(this.todo);
        todoComplete.addEventListener('click', function(event) {
            todoToggleComplete(this, thisTodo);
            event.stopPropagation();

        });
        currentTodo.appendChild(todoComplete);

        this.card = currentTodo;
    }

    populateMaxCard() {
        const thisTodo = this.getThisTodo();
        const thisList = this.getThisList();


        const currentTodo = this.card;
        currentTodo.removeEventListener('click', this.onCardClick);


        currentTodo.classList.remove('min');
        currentTodo.classList.add('todo', 'display', 'max');

        const todoName = document.createElement('div');
        todoName.classList.add('todo', 'name');
        todoName.textContent = this.name;
        todoName.role = 'button';
        todoName.addEventListener('click', () => {
            this.onCardClick();
        })
        currentTodo.appendChild(todoName);

        const todoDesc = document.createElement('div');
        todoDesc.classList.add('todo', 'description');
        todoDesc.textContent = this.description;
        currentTodo.appendChild(todoDesc);

        const todoDate = document.createElement('div');
        todoDate.classList.add('todo', 'date');
        todoDate.textContent = this.date;
        todoDate.role = 'button';
        todoDate.addEventListener('click', () => {
            this.onCardClick();
        })
        currentTodo.appendChild(todoDate);

        const todoComplete = document.createElement('button');
        todoComplete.classList.add('todo', 'complete');
        completeButtonStyle(todoComplete, this.todo);
        todoComplete.textContent = completeSymbol(this.todo);
        todoComplete.addEventListener('click', function(event) {
            todoToggleComplete(this, thisTodo);
            event.stopPropagation();
        });
        currentTodo.appendChild(todoComplete);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo', 'deleteButton');
        deleteButton.addEventListener('click', function() {
            deleteTodo(this, thisList, thisTodo);
        })
        currentTodo.appendChild(deleteButton);

        const deleteIcon = new SVG('trashIcon', '0 0 24 24', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        const deleteElement = deleteIcon.createSVG();
        deleteButton.appendChild(deleteElement);

        const editButton = document.createElement('button');
        editButton.classList.add('todo', 'editButton');
        editButton.addEventListener('click', () => {
            editTodoDialog(this.list, this.todo);
        })
        currentTodo.appendChild(editButton);

        const editText = document.createElement('div');
        editText.textContent = 'edit';
        editButton.appendChild(editText);

        const pencilIcon = new SVG('pencilIcon', '0 0 24 24', "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z");
        const pencilElement = pencilIcon.createSVG();
        editButton.appendChild(pencilElement);

        this.card = currentTodo;

        }



}

export { TodoCard };


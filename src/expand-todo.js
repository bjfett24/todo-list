import { Todo } from "./todo-class.js";
import { completeSymbol } from "./toggle-complete.js";
import { todoToggleComplete } from "./toggle-complete.js";
import { completeButtonStyle } from "./toggle-complete.js";

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
        deleteButton.textContent = '🗑️';
        deleteButton.addEventListener('click', () => {
            deleteTodo(this, this.list, this.todo);
        })
        currentTodo.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.classList.add('todo', 'editButton');
        editButton.textContent = 'edit ✏';
        editButton.addEventListener('click', () => {
            editTodoDialog(this.list, this.todo);
        })
        currentTodo.appendChild(editButton);

        this.card = currentTodo;

        }


        

}

export { TodoCard };


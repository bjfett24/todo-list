class Todo {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }

    getComplete() {
        return this.isComplete;
    }
    
    markComplete() {
        this.isComplete = true;
    }

    getName() {
        return this.name;
    }

    changeName(newName) {
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }

    changeDescription(newDesc) {
        this.description = newDesc;
    }

    getDate() {
        return this.dueDate;
    }

    changeDueDate(newDate) {
        this.dueDate = newDate;
    }


    getDetails() {
        return `${this.name}, ${this.description}, due: ${this.dueDate}`;
    }

};

export { Todo };
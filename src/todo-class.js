class Todo {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }

    markComplete() {
        this.isComplete = true;
    }

    changeName(newName) {
        this.name = newName;
    }

    changeDescription(newDesc) {
        this.description = newDesc;
    }

    changeDueDate(newDate) {
        this.dueDate = newDate;
    }

    getDetails() {
        return `${this.name}, ${this.description}, due: ${this.dueDate}`;
    }

};

export { Todo };
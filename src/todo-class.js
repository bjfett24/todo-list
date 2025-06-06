class Todo {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.isComplete = false;
    }

    getComplete() {
        return this.isComplete;
    }

    toggleComplete() {
        if (this.isComplete === false) {
            this.isComplete = true;
        } else {
            this.isComplete = false;
        }
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
        return this.date;
    }

    changeDate(newDate) {
        this.date = newDate;
    }


    getDetails() {
        return `${this.name}, ${this.description}, due: ${this.dueDate}`;
    }

};



export { Todo };
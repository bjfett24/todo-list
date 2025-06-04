class List {
    constructor(name) {
        this.name = name;
        this.todo = [];
    }

    changeName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }

    getTodos() {
        return this.todo;
    }

    addTodo(todoObj) {
        this.todo.push(todoObj);
    }

    removeTodo(todoObj) {
        const list = this.todo;
        this.todo = list.filter(obj => obj !== todoObj);
    }
}

export { List };
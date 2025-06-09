class List {
    constructor(name, id = crypto.randomUUID()) {
        this.name = name;
        this.todo = [];
        this.id = id
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
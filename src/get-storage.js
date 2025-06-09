import { listOfLists } from "./list-of-lists";
import { List } from "./list.js";
import { Todo } from "./todo-class.js";

const getStorage = function() {
    if (localStorage.getItem('listOfLists')) {
        const storedJson = localStorage.getItem('listOfLists');
        let storedData;
        try {
            storedData = JSON.parse(storedJson);
            console.log("Data retrieved from localStorage (parsed):", storedData);
        } catch (e) {
            console.error("Error parsing localStorage data:", e);
            console.log("Corrupt data found. Starting with empty library.");
            // Optionally clear corrupt data if parsing fails
            localStorage.removeItem('listOfLists');
            return; // Exit function if data is corrupt
        }

        // Re-instantiate List and Todo objects
        const reconstructedLists = storedData.map(listData => {
            // Pass name AND id to the List constructor
            const newList = new List(listData.name, listData.id);

            // Re-instantiate Todo objects for each list
            if (listData.todo) { // Using listData.todo because your List class has 'this.todo'
                listData.todo.forEach(todoData => {
                    // Pass all original properties to the Todo constructor
                    const newTodo = new Todo(
                        todoData.name,
                        todoData.description,
                        todoData.date,
                        todoData.id, // Pass the original ID
                        todoData.isComplete // Pass the original isComplete status
                    );
                    newList.addTodo(newTodo);
                });
            }
            return newList;
        });
        
        listOfLists.setList(reconstructedLists);
        console.log("Reconstructed listOfLists:", listOfLists.getListOfLists());
    } else {
        console.log("No data found in localStorage. Starting with empty library.");
    }
}

export { getStorage };
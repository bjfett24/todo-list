const listOfLists = (function() {
    let listList = [];

    const setList = (list) => {
        listList = list;
    }

    const addList = (list) => {
        listList.push(list);
    }

    const removeList = (list) => {
        listList = getListOfLists().filter(item => item !== list);
    }

    const getListOfLists = () => {
        return listList;
    }
    return { addList, removeList, getListOfLists, setList };
})();

export { listOfLists };
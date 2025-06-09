import { listOfLists } from "./list-of-lists";

const setStorage = function() {
    localStorage.setItem('listOfLists', JSON.stringify(listOfLists.getListOfLists()));
}

export {setStorage};
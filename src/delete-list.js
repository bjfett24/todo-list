import { removeListFromList } from "./add+rem-list.js";
import { listOfLists } from "./list-of-lists.js";

const deleteList = function(thisButton, list) {
    const parentDisplay = thisButton.parentNode;
    parentDisplay.remove();

    removeListFromList(list);


}

export { deleteList };
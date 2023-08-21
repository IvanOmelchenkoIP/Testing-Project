"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import deselectItemMediator from "../../../../mediators/assignment/layers/add/deselect-item-mediator.js";

const selectableItemsListenerHandler = (currentSelected) => {
	deselectItemMediator();
	currentSelected.classList.add("add-selectable-item-selected");
	assignmentConstructorContext.addSelection.selectedItem = currentSelected;
}

export default selectableItemsListenerHandler;

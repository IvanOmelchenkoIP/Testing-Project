"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import resetSelectedItemMediator from "../../../../mediators/assignment/layers/add/reset-selected-item-mediator.js";

const selectableItemsListenerHandler = (currentSelected) => {
	resetSelectedItemMediator();
	currentSelected.classList.add("add-selectable-item-selected");
	assignmentConstructorContext.addSelection.selectedItem = currentSelected;
}

export default selectableItemsListenerHandler;

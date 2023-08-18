"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";

const selectableItemsListenerHandler = (currentSelected) => {
	if (assignmentConstructorContext.addedSelection != null) {
		const previousSelected = domSelector.document.selectFirstByClass("add-selectable-item-selected");
		previousSelected.classList.remove("add-selectable-item-selected")
	}
	currentSelected.classList.add("add-selectable-item-selected");
	assignmentConstructorContext.addSelection.selectedItem = currentSelected;
}

export default selectableItemsListenerHandler;

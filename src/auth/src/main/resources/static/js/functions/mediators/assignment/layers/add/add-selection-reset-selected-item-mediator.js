"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js"; 

const addSelectionResetSelectedItemMediator = () => {
	if (assignmentConstructorContext.addSelection.selectedItem != null) {
		assignmentConstructorContext.addSelection.selectedItem = null;
		const selectedItem = domSelector.document.selectFirstByClass("add-selectable-item-selected");
		selectedItem.classList.remove("add-selectable-item-selected");
	}
}

export default addSelectionResetSelectedItemMediator;

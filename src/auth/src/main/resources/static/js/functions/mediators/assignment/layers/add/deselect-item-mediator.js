"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js"; 

const deselectItemMediator = () => {
	if (assignmentConstructorContext.addSelection.selectedItem != null) {
		const selected = domSelector.document.selectFirstByClass("add-selectable-item-selected");
		selected.classList.remove("add-selectable-item-selected");
		assignmentConstructorContext.addSelection.selectedItem = null;
	}
}

export default deselectItemMediator;

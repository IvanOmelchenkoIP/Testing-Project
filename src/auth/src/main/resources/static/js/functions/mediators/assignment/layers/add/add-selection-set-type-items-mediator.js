"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js"; 
 
const addSelectionSetTypeItemsMediator = () => {
	const container = domSelector.document.selectFirstByClass("add-selection-container display-flex");
	const items = domSelector.selectAllByClass(container, "add-selectable-item");
	const typeItems = new Object();
	for (const item of items) {
		const itemName = domSelector.selectFirstByClass(item, "add-selectable-name").innerText;
		typeItems[itemName] = item;
	}
	assignmentConstructorContext.addSelection.typeItems = typeItems;	
}

export default addSelectionSetTypeItemsMediator;

"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import addSelectionSearchItemsResetMediator from "../../../../mediators/assignment/layers/add/add-selection-search-items-reset-mediator.js";

const addSelectionSearchListenerHandler = (event) => {
	const value = event.target.value;
	if (value == "") {
		addSelectionSearchItemsResetMediator();
		return;
	} 
	const itemTypes = assignmentConstructorContext.addSelection.typeItems;
	const itemNames = Object.keys(itemTypes);
	for (const itemName of itemNames) {
		const item = itemTypes[itemName];
		if (itemName.toLowerCase().includes(value.toLowerCase())) {
			if (item.className.split(" ").pop() == "display-none") {
				item.classList.remove("display-none");
			}
		} else {
			item.classList.add("display-none");
		}
	}
}

export default addSelectionSearchListenerHandler;

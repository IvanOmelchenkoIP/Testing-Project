"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";

const addSelectionSearchListenerHandler = (event) => {
	const value = event.target.value;
	if (value == "") {
		addSelectionResetSearchListenerHandler();
		return;
	} 
	const itemTypes = assignmentConstructorContext.addSelection.typeItems;
	const itemNames = Object.keys(itemTypes);
	for (const itemName of itemNames) {
		const item = itemTypes.itemName;
		if (itemName.includes(value)) {
			if (item.className.split(" ").pop() == "display-none") {
				item.classList.remove("display-none");
			}
		} else {
			item.classList.add("diplay-none");
		}
	}
}

export default addSelectionSearchListenerHandler;

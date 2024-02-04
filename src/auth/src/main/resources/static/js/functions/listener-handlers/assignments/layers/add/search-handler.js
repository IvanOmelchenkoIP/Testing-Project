"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import searchItemsResetMediator from "../../../../mediators/assignment/layers/add/search-items-reset-mediator.js";

const searchListenerHandler = (event) => {
	const value = event.target.value;
	if (value == "") {
		searchItemsResetMediator();
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

export default searchListenerHandler;

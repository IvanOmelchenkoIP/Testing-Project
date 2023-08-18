"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";

const addSelectionResetSearchListenerHandler = () => {
	const itemTypes = assignmentConstructorContext.addSelection.typeItems;
	for (const item of itemTypes) {
		if (item.className.split(" ").pop() == "display-none") {
			item.classList.remove("display-none");
		}
	}
}

export default addSelectionResetSearchListenerHandler;

"use strict";

import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";

const searchItemsResetMediator = () => {
	const typeItems = assignmentConstructorContext.addSelection.typeItems;
	const items = Object.values(typeItems);
	for (const item of items) {
		if (item.className.split(" ").pop() == "display-none") {
			item.classList.remove("display-none");
		}
	}
}

export default searchItemsResetMediator;

"use strict";

import selectableItemsListenerHandler from "./selectable-items-handler.js";
import selectableTypesListenerHandler from "./selectable-types-handler.js";

const SELECTABLES_LISTENER_HANDLER = {
	"add-selectable-item": (target) => {
		selectableItemsListenerHandler(target);	
	},
	"add-selectable-type": (target) => {
		selectableTypesListenerHandler(target);	
	},
};

const selectableListenerHandler = (event) => {
	let selectable = event.target;
	if (selectable == null || selectable == undefined) return;
	while (true) {
		if (selectable.className.split(" ")[0] == "add-selectable") break;
		selectable = selectable.parentElement;
	}
	const selectableType = selectable.className.split(" ")[1];
	const handler = SELECTABLES_LISTENER_HANDLER[selectableType];
	handler(selectable);
}

export default selectableListenerHandler;

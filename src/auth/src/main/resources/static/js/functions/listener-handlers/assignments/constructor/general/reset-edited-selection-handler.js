"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const resetEditedSelectionListenerHandler = (event) => {
	const target = event.target;
	const editedSelected = domSelector.document.selectFirstByClass("menu-assignment-name-container");
	if (target == editedSelected || editedSelected.contains(target)) return;
	editedSelected.classList.remove("selected");
}

export default resetEditedSelectionListenerHandler;

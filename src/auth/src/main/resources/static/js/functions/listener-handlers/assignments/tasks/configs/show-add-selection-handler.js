"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const showAddSelectionListenerHandler = () => {
	const addSelectionMenu = domSelector.document.selectFirstByClass("add-selection-menu");
	const classes = addSelectionMenu.classList;
	if (classes.length == 1) classes.add("display-flex");
}

export default showAddSelectionListenerHandler;

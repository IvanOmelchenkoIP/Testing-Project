"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const addSelectionShowListenerHandler = () => {
	const addSelectionMenu = domSelector.document.selectFirstByClass("add-selection-menu-wrapper");
	const classes = addSelectionMenu.classList;
	if (classes.length == 1) classes.add("display-flex");
	domSelector.document.selectFirstByName("add-selection-sarch-bar").reset();
	domSelector.document.selectById("add-selectable-type-all").click();
}

export default addSelectionShowListenerHandler;

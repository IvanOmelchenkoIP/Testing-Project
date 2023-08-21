"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const addSelectionShowListenerHandler = () => {
	domSelector.document.selectById("add-selectable-type-all").click();
	
	const addSelectionMenu = domSelector.document.selectFirstByClass("add-selection-menu-wrapper");
	const classes = addSelectionMenu.classList;
	if (classes.length == 1) classes.add("display-flex");	
}

export default addSelectionShowListenerHandler;

"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const addSelectionCloseMediator = () => {
	const closeAddSelection = domSelector.document.selectFirstByClass("add-selection-menu-wrapper")
	const classes = closeAddSelection.classList;
	if (classes.length > 1) classes.remove("display-flex");
}

export default addSelectionCloseMediator;

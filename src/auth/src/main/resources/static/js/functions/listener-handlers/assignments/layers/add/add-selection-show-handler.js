"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import resetSelectedTypeMediator from "../../../../mediators/assignment/layers/add/reset-selected-type-mediator.js";

const addSelectionShowListenerHandler = () => {
	resetSelectedTypeMediator();
	domSelector.document.selectById("add-selectable-type-all").click();
	const addSelectionMenu = domSelector.document.selectFirstByClass("add-selection-menu-wrapper");
	const classes = addSelectionMenu.classList;
	if (classes.length == 1) classes.add("display-flex");	
}

export default addSelectionShowListenerHandler;

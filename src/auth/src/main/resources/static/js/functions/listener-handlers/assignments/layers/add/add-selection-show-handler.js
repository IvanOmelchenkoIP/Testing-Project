"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import deselectItemMediator from "../../../../mediators/assignment/layers/add/deselect-item-mediator.js";

const addSelectionShowListenerHandler = () => {
	domSelector.document.selectById("add-selectable-type-all").click();
	deselectItemMediator();
	const addSelectionMenu = domSelector.document.selectFirstByClass("add-selection-menu-wrapper");
	const classes = addSelectionMenu.classList;
	if (classes.length == 1) classes.add("display-flex");	
}

export default addSelectionShowListenerHandler;

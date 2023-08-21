"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import addSelectionResetSelectedItemMediator from "../../../../mediators/assignment/layers/add/add-selection-reset-selected-item-mediator.js";
import addSelectionSetTypeItemsMediator from "../../../../mediators/assignment/layers/add/add-selection-set-type-items-mediator.js";

const selectableTypesListenerHandler = (currentSelected) => {
	const previousSelected = domSelector.document.selectFirstByClass("add-selectable-type-selected");
	if (currentSelected == previousSelected) return;
	if (previousSelected) previousSelected.classList.remove("add-selectable-type-selected");
	currentSelected.classList.add("add-selectable-type-selected");	
	
	const currentSelectedContainerId = currentSelected.id + "-container";
	const currentSelectedContainer = domSelector.document.selectById(currentSelectedContainerId);
	const previousSelectedContainer = domSelector.document.selectFirstByClass("add-selection-container display-flex");
	if (previousSelectedContainer) previousSelectedContainer.classList.remove("display-flex");
	currentSelectedContainer.classList.add("display-flex");
	
	addSelectionResetSelectedItemMediator();

	addSelectionSetTypeItemsMediator();
	
	const resetSearch = domSelector.document.selectFirstByName("add-selection-search-reset");
	resetSearch.click();
}

export default selectableTypesListenerHandler;

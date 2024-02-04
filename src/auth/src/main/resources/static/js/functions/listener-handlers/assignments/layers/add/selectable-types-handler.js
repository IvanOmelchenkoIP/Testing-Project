"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import resetSelectedItemMediator from "../../../../mediators/assignment/layers/add/reset-selected-item-mediator.js";
import contextSetTypeItemsMediator from "../../../../mediators/assignment/layers/add/context-set-type-items-mediator.js";
import resetSelectedTypeContainerMediator from "../../../../mediators/assignment/layers/add/reset-selected-type-container-mediator.js";

const selectableTypesListenerHandler = (currentSelected) => {
	const previousSelected = domSelector.document.selectFirstByClass("add-selectable-type-selected");
	if (currentSelected == previousSelected) return;
	if (previousSelected) previousSelected.classList.remove("add-selectable-type-selected");
	currentSelected.classList.add("add-selectable-type-selected");	
	
	const currentSelectedContainerId = currentSelected.id + "-container";
	const currentSelectedContainer = domSelector.document.selectById(currentSelectedContainerId);
	resetSelectedTypeContainerMediator();
	currentSelectedContainer.classList.add("display-flex");
	
	resetSelectedItemMediator();

	contextSetTypeItemsMediator();
	
	const resetSearch = domSelector.document.selectById("add-selection-search-reset");
	resetSearch.click();
}

export default selectableTypesListenerHandler;

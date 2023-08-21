"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import addSelectionSearchItemsResetMediator from "../../../../mediators/assignment/layers/add/add-selection-search-items-reset-mediator.js";

const searchResetListenerHandler = () => {
	const searchBar = domSelector.document.selectFirstByName("add-selection-search-bar");
	searchBar.value = "";
	addSelectionSearchItemsResetMediator();
}

export default searchResetListenerHandler;

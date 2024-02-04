"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";
import searchItemsResetMediator from "../../../../mediators/assignment/layers/add/search-items-reset-mediator.js";

const searchResetListenerHandler = () => {
	const searchBar = domSelector.document.selectFirstByName("add-selection-search-bar");
	searchBar.value = "";
	searchItemsResetMediator();
}

export default searchResetListenerHandler;

"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const resetSelectedTypeContainerMediator = () => {
	const selectedContainer = domSelector.document.selectFirstByClass("add-selection-container display-flex");
	if (selectedContainer) selectedContainer.classList.remove("display-flex");
}

export default resetSelectedTypeContainerMediator;

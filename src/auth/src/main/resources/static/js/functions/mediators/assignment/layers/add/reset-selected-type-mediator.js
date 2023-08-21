"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const resetSelectedTypeMediator = () => {
	const selected = domSelector.document.selectFirstByClass("add-selectable-type-selected");
	if (selected) selected.classList.remove("add-selectable-type-selected");
}

export default resetSelectedTypeMediator;

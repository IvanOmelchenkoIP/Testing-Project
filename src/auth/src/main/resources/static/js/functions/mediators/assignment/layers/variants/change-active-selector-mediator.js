"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const changeActiveSelectorMediator = (selectedVariant) => {
	const selectionIndicator = domSelector.selectFirstByClass(selectedVariant, "selection-indicator");
	const previousIndicator = domSelector.document.selectFirstByClass("selection-indicator selection-indicator-selected");
	previousIndicator.classList.remove("selection-indicator-selected");
	selectionIndicator.classList.add("selection-indicator-selected");
}

export default changeActiveSelectorMediator;

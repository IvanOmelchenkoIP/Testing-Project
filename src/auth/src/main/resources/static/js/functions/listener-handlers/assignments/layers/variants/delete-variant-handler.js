"use strict";

import changeVariantMediator from "../../../../mediators/assignment/layers/variants/change-variant-mediator.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";

const deletedVariantListenerHandler = (event) => {
	const target = event.target;
	const deletedVariant = target.closest(".variant-row");
	if (deletedVariant == null || deletedVariant == undefined) return;
	
	const deletedSelectionIndicator = domSelector.selectFirstByClass(deletedVariant, "selection-indicator");
	if (deletedSelectionIndicator.className.split(" ").length > 1) {
		const variants = domSelector.document.selectAllByClass("variant-row");
		changeVariantMediator(variants[0] == deletedVariant ? variants[1] : variants[0]);
	}
	
	deletedVariant.remove();
	
	const variants = domSelector.document.selectAllByClass("variant-contents-wrapper");
	if (variants.length == 1) {
		domSelector.selectFirstByClass(variants[0], "delete-variant").classList.remove("display-block");
	}
}

export default deletedVariantListenerHandler;

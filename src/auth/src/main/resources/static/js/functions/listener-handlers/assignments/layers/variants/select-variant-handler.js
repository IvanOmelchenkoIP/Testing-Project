"use strict"; 

import changeVariantMediator from "../../../../mediators/assignment/layers/variants/change-variant-mediator.js";
import variantSelectionCloseListenerHandler from "./variant-selection-close-handler.js";

const selectVariantListenerHandler = (event) => {
	let target = event.target;
	if (target == null || target == undefined) return;
	if (target.className.split(" ").shift() == "delete-variant") return;
	if (selectedVariant.className != "variant-row") {
		const selectedVariant = target.closest(".variant-row");
		if (selectedVariant == null || selectedVariant == undefined) return;
	}
	changeVariantMediator(selectedVariant);
	variantSelectionCloseListenerHandler();
}

export default selectVariantListenerHandler;

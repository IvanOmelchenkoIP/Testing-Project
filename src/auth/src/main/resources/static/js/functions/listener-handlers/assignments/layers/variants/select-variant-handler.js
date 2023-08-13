"use strict"; 

import changeVariantMediator from "../../../../mediators/assignment/layers/variants/change-variant-mediator.js";
import variantSelectionCloseListenerHandler from "./variant-selection-close-handler.js";

const selectVariantListenerHandler = (event) => {
	let selectedVariant = event.target;
	if (selectedVariant == null || selectedVariant == undefined) return;
	if (selectedVariant.className.split(" ").shift() == "delete-variant") return;
	if (selectedVariant.className != "variant-row") {
		while (true) {
			if (selectedVariant.className.split(" ").shift() == "variant-row") break;
			selectedVariant = selectedVariant.parentElement;
		}
	}
	changeVariantMediator(selectedVariant);
	variantSelectionCloseListenerHandler();
}

export default selectVariantListenerHandler;

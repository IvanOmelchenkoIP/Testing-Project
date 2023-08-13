"use struct";

import VariantLayer from "../../../../../constructors/implementations/assignments/layers/variant-layer.js";
import assignmentConstructorContext from "../../../../../context/assignments/assignment-constructor-context.js";
import { domSelector } from "../../../../../utils/html/html-utils.js";
import selectVariantListenerHandler from "./select-variant-handler.js";
import deleteVariantListenerHandler from "./delete-variant-handler.js";

const addVariantListenerHandler = () => {
	const variants = domSelector.document.selectAllByClass("variant-contents-wrapper");
	if (variants.length == 1) {
		domSelector.selectFirstByClass(variants[0], "delete-variant").classList.add("display-block");
	}
	const addVariantBtn = domSelector.document.selectLastByClass("variant-row");
	const newVariant = VariantLayer.new(assignmentConstructorContext.namingOrders.variant.next());
	addVariantBtn.before(newVariant);
	newVariant.addEventListener("click", selectVariantListenerHandler);
	domSelector.selectFirstByClass(newVariant, "delete-variant")
			   .addEventListener("click", deleteVariantListenerHandler);
}

export default addVariantListenerHandler;

"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const changeVariantNameMediator = (selectedVariant) => {
	const variantName = domSelector.selectFirstByClass(selectedVariant, "variant-name").innerText;
	domSelector.document.selectFirstByClass("editable-variant-name").innerText = variantName;	
}

export default changeVariantNameMediator;

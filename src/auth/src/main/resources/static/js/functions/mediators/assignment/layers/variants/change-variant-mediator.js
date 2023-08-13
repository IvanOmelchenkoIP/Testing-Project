"use strict";

import changeActiveSelectorMediator from "./change-active-selector-mediator.js";
import changeVariantNameMediator from "./change-variant-name-mediator.js";

const changeVariantMediator = (selectedVariant) => {
	changeActiveSelectorMediator(selectedVariant);
	changeVariantNameMediator(selectedVariant);
}

export default changeVariantMediator;

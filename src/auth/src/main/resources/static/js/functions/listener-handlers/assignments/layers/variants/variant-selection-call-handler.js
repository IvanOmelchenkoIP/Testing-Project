"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const variantSelectionCallListeerHandler = () => {
	const layersContentsWrapper = domSelector.document.selectFirstByClass("layers-contents-wrapper");
	const variantsMenuWrapper = domSelector.document.selectFirstByClass("variants-menu-wrapper");
	layersContentsWrapper.classList.remove("display-flex");
	variantsMenuWrapper.classList.add("display-flex");
}

export default variantSelectionCallListeerHandler;

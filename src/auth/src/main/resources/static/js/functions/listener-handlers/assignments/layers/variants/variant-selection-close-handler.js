"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const variantSelectionCloseListeerHandler = () => {
	const layersContentsWrapper = domSelector.document.selectFirstByClass("layers-contents-wrapper");
	const variantsMenuWrapper = domSelector.document.selectFirstByClass("variants-menu-wrapper");
	variantsMenuWrapper.classList.remove("display-flex");
	layersContentsWrapper.classList.add("display-flex");
}

export default variantSelectionCloseListeerHandler;

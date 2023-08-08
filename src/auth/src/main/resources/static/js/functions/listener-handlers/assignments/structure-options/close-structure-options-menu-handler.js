"use strict";

import { domSelector } from "../../../../utils/html/html-utils.js";

const closeStructureOptionsMenuListenerHandler = () => {
	const structureOptionsCntentsContainerWrapper = domSelector.document.selectFirstByClass("structure-options-contents-container-wrapper");
	const structureOptionsMenuWrapper = domSelector.document.selectFirstByClass("structure-options-menu-wrapper");
	structureOptionsMenuWrapper.classList.remove("display-flex");
	structureOptionsCntentsContainerWrapper.classList.add("display-flex");
}

export default closeStructureOptionsMenuListenerHandler;

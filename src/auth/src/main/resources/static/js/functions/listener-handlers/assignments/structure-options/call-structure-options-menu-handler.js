"use strict";

import { domSelector } from "../../../../utils/html/html-utils.js";

const callStructureOptionsMenuListenerHandler = () => {
	const structureOptionsCntentsContainerWrapper = domSelector.document.selectFirstByClass("structure-options-contents-container-wrapper");
	const structureOptionsMenuWrapper = domSelector.document.selectFirstByClass("structure-options-menu-wrapper");
	structureOptionsCntentsContainerWrapper.classList.remove("display-flex");
	structureOptionsMenuWrapper.classList.add("display-flex");
}

export default callStructureOptionsMenuListenerHandler;

"use strict";

import { domSelector } from "../../../../../utils/html/html-utils.js";

const toggleChildLayersListenerHandler = (event) => {
	const target = event.target;
	const layerRow = target.closest(".layer-row");
	const childLayers = domSelector.selectFirstByClass(layerRow, "child-layers");
	childLayers.classList.toggle("display-none");
	target.innerText = target.innerText == ">" ? "<" : ">";
}

export default toggleChildLayersListenerHandler;

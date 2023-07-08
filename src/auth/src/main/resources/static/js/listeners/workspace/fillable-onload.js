"use strict";

import domSelector from "../../dom/select/instances/dom-selector.js";
import fillableLoadCallback from "../../callbacks/workspace/load/fillable-load-callback.js";

if (document.readyState == "complete") {
	fillableLoadCallback();
} else {
	domSelector.selectByClass("fillable").addEventListener("load", () => {
		fillableLoadCallback();
	});
}



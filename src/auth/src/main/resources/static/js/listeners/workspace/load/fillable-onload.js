"use strict";

import domSelector from "../../dom/select/instances/dom-selector.js";
import fillableLoadListenerHandler from "../../functions/listener-handlers/workspace/navigation/fillable-load-handler.js";

if (document.readyState == "complete") {
	fillableLoadListenerHandler();
} else {
	domSelector.selectByClass("fillable").addEventListener("load", fillableLoadListenerHandler);
}

"use strict";

import { domSelector } from "../../../utils/html/html-utils.js";
import fillableLoadListenerHandler from "../../functions/listener-handlers/workspace/navigation/fillable-load-handler.js";

if (document.readyState == "complete") {
	fillableLoadListenerHandler();
} else {
	domSelector.document.selectByClass("fillable").addEventListener("load", fillableLoadListenerHandler);
}

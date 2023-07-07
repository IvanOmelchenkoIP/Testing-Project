"use strict";

import domSelector from "../../../select/instances/dom-selector.js";
import setScriptedInnerHtml from "../../generic-setters/scripted/inner-html-scripts.js";

const setScriptedClassInnerHtml = (name, html) => {
	console.log("here")
	setScriptedInnerHtml(domSelector.selectClass(name), html);
}

export default setScriptedClassInnerHtml;

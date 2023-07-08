"use strict";

import domSelector from "../../../select/instances/dom-selector.js";
import setScriptedInnerHtml from "../../generic-setters/scripted/inner-html-scripts.js";

const setScriptedClassInnerHtml = (name, html) => {
	setScriptedInnerHtml(domSelector.selectByClass(name), html);
}

export default setScriptedClassInnerHtml;

"use strict";

import setScriptedInnerHtml from "../../generic-setters/scripted/inner-html-scripts.js";

const setScriptedDocumentElement = (html) => {
	setScriptedInnerHtml(document.documentElement, html);
}

export default setScriptedDocumentElement;

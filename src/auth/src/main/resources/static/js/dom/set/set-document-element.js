"use strict";

import setScriptedInnerHtml from "./setter-implementations/inner-html-scripts.js";

const setDocumentElement = (html) => {
	setScriptedInnerHtml(document.documentElement, html);
}

export default setDocumentElement;

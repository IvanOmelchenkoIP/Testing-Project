"use strict";

import domSelector from "../select/dom-selector.js";
import setScriptetInnerHtml from "./setter-implementations/inner-html-scripts.js";


const setClassInnerHtml = (name, html) => {
	setScriptetInnerHtml(domSelector.selectClass(name), html);
}

export default setClassInnerHtml;


"use strict";

import domSelector from "../../select/instances/dom-selector.js";
import setInnerHtml from "../generic-setters/inner-html.js";

const setIdInnerHtml = (name, html) => {
	setInnerHtml(domSelector.selectById(name), html);
}

export default setIdInnerHtml;

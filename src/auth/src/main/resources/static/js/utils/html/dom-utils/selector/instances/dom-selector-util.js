"use strict";

import DOMSelector from "../implementations/dom-selector.js";
import DocumentDOMSelector from "../implementations/document-dom-selector.js";

const domSelector = { ...new DOMSelector() };
const document = new DocumentDOMSelector();
domSelector.document = document;

console.log("DOM_SELECTOR\n" + domSelector);

export default domSelector;

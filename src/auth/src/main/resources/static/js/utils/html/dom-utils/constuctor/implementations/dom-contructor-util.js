"use strict";

import DOMConstructor from "./dom-constructor.js";

class DOMConstructorUtil {
	newDOMElement(tag, innerText = "") {
		return new DOMConstructor(tag, innerText);
	}
	
	newDiv(innerText = "") {
		return this.newDOMElement("div", innerText);
	}
}

export default DOMConstructorUtil;

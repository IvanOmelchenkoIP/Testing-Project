"use strict";

import DOM_SELECTORS from "../data/dom-selectors.js";

class DOMSelector {
	idSelector() {
		return DOM_SELECTORS.id;
	}
	
	nameSelector() {
		return DOM_SELECTORS.name;
	}
	
	tagSelector() {
		return DOM_SELECTORS.tag;
	}
	
	classSelector() {
		return DOM_SELECTORS.htmlClass;
	}
	
	allClassSelector() {
		return DOM_SELECTORS.allHtmlClass;
	}
	
	selectByTag(name) {
		return DOM_SELECTORS.tag(name);
	}
	
	selectByName(name) {
		return DOM_SELECTORS.name(name);
	}
	
	selectById(name) {
		return DOM_SELECTORS.id(name);
	}
	
	selectByClass(name) {
		return DOM_SELECTORS.htmlClass(name);
	}
	
	selectAllByClassName(name) {
		return DOM_SELECTORS.allHtmlClass(name);
	}
}

export default DOMSelector;

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
}

export default DOMSelector;

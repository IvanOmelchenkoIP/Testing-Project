"use strict";

import DOM_SELECTORS from "./dom-selectors.js";

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
	
	selectData(selector, ...names) {
		const data = {};
		for (const name of names) data[name] = selector(name);
		return data;
	}
}

export default DOMSelector;

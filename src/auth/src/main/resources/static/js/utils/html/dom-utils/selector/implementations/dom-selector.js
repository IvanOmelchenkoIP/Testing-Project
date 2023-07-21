"use strict";

import DOM_SELECTORS from "../data/dom-selectors.js";
import ArrayUtil from "../../../../collections/array/array-util.js";

class DOMSelector {
	// return selectors
	
	getIdSelector() {
		return DOM_SELECTORS.id;
	}
	
	getNameSelector() {
		return DOM_SELECTORS.name;
	}
	
	getTagSelector() {
		return DOM_SELECTORS.tag;
	}
	
	getClassSelector() {
		return DOM_SELECTORS.htmlClass;
	}
	
	//select by ...
	
	selectBySelector(selector, name) {
		return selector(name);
	}
	
	selectById(name) {
		return DOM_SELECTORS.id(name);
	}
	
	selectAllByName(name) {
		return DOM_SELECTORS.name(name);
	}
	
	selectAllByTag(name) {
		return DOM_SELECTORS.tag(name);
	}
	
	selectAllByClass(name) {
		return DOM_SELECTORS.htmlClass(name);
	}
	
	// ordered select by ... for selectors that return collections (name, tag, class)
	
	selectFirstByName(name) { 
		return ArrayUtil.first(this.selectAllByName(name));
	}
	
	selectFirstByTag(name) {
		return ArrayUtil.first(this.selectAllByTag(name));
	}
	
	selectFirstByClass(name) {
		return ArrayUtil.first(this.selectAllByClass(name));
	}
	
	selectLastByName(name) {
		return ArrayUtil.last(this.selectAllByName(name));
	}
	
	selectLastByTag(name) {
		return ArrayUtil.last(this.selectAllByTag(name));
	}
	
	selectLastByClass(name) {
		return ArrayList.last(this.selectAllByClass(name));
	}
}

export default DOMSelector;

"use strict";

import DOMSelector from "./dom-selector.js";
import { fnArgsCurry } from "../../../../fns/curry/curry.js";

class DocumentDOMSelector extends DOMSelector {
	
	// return selectors
	
	getIdSelector() {
		return fnArgsCurry(super.getIdSelector())(document);
	}
	
	getNameSelector() {
		return fnArgsCurry(super.getNameSelector())(document);
	}
	
	getTagSelector() {
		return fnArgsCurry(super.getTagSelector())(document);
	}
	
	getClassSelector() {
		return fnArgsCurry(super.getClassSelector())(document);
	}
	
	//select by ...
	
	selectBySelector(selector, name) {
		return selector(name);
	}
	
	selectById(name) {
		return super.selectById(document, name);
	}
	
	selectAllByName(name) {
		return super.selectAllByName(document, name);
	}
	
	selectAllByTag(name) {
		return super.selectAllByTag(document, name);
	}
	
	selectAllByClass(name) {
		return super.selectAllByClass(document, name);
	}
	
	// ordered select by ... for selectors that return collections (name, tag, class)
	
	selectFirstByName(name) { 
		return super.selectFirstByName(document, name);
	}
	
	selectFirstByTag(name) {
		return super.selectFirstByTag(document, name);
	}
	
	selectFirstByClass(name) {
		return super.selectFirstByClass(document, name);
	}
	
	selectLastByName(name) {
		return super.selectLastByName(document, name);
	}
	
	selectLastByTag(name) {
		return super.selectLastByTag(document, name);
	}
	
	selectLastByClass(name) {
		return super.selectLastByClass(document, name);
	}
}

export default DocumentDOMSelector;

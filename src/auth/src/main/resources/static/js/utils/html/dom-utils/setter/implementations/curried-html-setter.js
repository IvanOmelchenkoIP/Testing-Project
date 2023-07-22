"use strict";

class CurriedInnerHtmlSetter {
	constructor(domSelector, setterImpl) {
		this._domSelector = domSelector;
		this._setterImpl = setterImpl;
	}
	
	setInnerHtml(element) {
		return (html) => {
			this._setterImpl.setInnerHtml(element, html);
		}
	}
	
	setIdInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectById(name));
	}
	
	setAllNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectAllByName(name));

	}
	
	setAllTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectAllByTag(name));

	}
	
	setAllClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectAllByClass(name));

	}
	
	setFirstNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectFirstByName(name));
	}
	
	setFirstTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectFirstByTag(name));
	}
	
	setFirstClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectFirstByClass(name));
	}
	
	setLastNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectLastByName(name));
	}
	
	setLastTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectLastByTag(name));
	}
	
	setLastClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.selectLastByClass(name));
	}
}

export default CurriedInnerHtmlSetter;

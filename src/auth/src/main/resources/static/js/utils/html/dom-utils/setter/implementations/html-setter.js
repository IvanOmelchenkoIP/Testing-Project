"use strict";

class InnerHtmlSetter {
	constructor(domSelector) {
		this._domSelector = domSelector;
	}
	
	setInnerHtml(element, html) {
		element.innerHtml = html;
	}
	
	setIdInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectById(name), html);
	}
	
	setAllNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectAllByName(name), html);

	}
	
	setAllTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectAllByTag(name), html);

	}
	
	setAllClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectAllByClass(name), html);

	}
	
	setFirstNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectFirstByName(name), html);
	}
	
	setFirstTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectFirstByTag(name), html);
	}
	
	setFirstClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectFirstByClass(name), html);
	}
	
	setLastNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectLastByName(name), html);
	}
	
	setLastTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectLastByTag(name), html);
	}
	
	setLastClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.selectLastByClass(name), html);
	}
}

export default InnerHtmlSetter;

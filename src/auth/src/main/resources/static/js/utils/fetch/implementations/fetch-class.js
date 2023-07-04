"use strict";

class FetchUtil {
	constructor(postImpl, getHtmlImpl) {
		this.postImpl = postImpl;
		this.getHtmlImpl = getHtmlImpl;
	}
	
	post() {
		this.postImpl();
	}
	
	getHtml() {
		this.getHtmlImpl();
	}
}
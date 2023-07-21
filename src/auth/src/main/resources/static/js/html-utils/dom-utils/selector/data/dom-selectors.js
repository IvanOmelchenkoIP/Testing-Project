"use strict";

const DOM_SELECTORS = {
	name: (name) => document.getElementByName(name),
	id: (id) => document.getElementById(id),
	tag: (tag) => document.getElementsByTagName(tag),
	htmlClass: (htmlClass) => document.getElementsByClassName(htmlClass)
};

export default DOM_SELECTORS;

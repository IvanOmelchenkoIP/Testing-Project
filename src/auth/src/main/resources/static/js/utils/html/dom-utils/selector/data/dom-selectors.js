"use strict";

const DOM_SELECTORS = {
	name: (element, name) => element.getElementByName(name),
	id: (element, id) => element.getElementById(id),
	tag: (element, tag) => element.getElementsByTagName(tag),
	htmlClass: (element, htmlClass) => element.getElementsByClassName(htmlClass),
};

export default DOM_SELECTORS;

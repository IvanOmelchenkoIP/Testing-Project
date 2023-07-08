"use strict";

const DOM_SELECTORS = {
	name: (name) => document.getElementsByName(name)[0].value,
	id: (id) => document.getElementById(id),
	tag: (tag) => document.getElementsByTagName(tag),
	htmlClass: (htmlClass) => document.getElementsByClassName(htmlClass)[0]
};

export default DOM_SELECTORS;

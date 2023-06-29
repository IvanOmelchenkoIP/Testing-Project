"use strict";

const DOM_SELECTORS = {
	name: (name) => document.getElementsByName(name)[0].value,
	id: (id) => document.getElementById(id),
	tag: (tag) => document.getElementsByTagName(tag)
};

export default DOM_SELECTORS;
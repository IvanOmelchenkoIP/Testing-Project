"use strict";

const DOM_DATA_GETTERS = {
	name: (name) => document.getElementsByName(name)[0].value,
	id: (id) => document.getElementById(id),
};

const parseDomData = (method, ...args) => {
	const userData = {};
	for (const element of args) userData[element] = method(element);
	return userData;
};

export { DOM_DATA_GETTERS, parseDomData };

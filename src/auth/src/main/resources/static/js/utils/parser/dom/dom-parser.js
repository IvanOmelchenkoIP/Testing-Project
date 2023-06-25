"use strict";

const parseDomData = (method, ...args) => {
	const userData = {};
	for (const element of args) userData[element] = method(element);
	return userData;
};

export default parseDomData;

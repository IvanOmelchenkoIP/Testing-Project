"use strict";

const DOM_DATA_GETTERS = {
	name: (name) => document.getElementsByName(name)[0].value,
	id: (id) => document.getElementById(id),
};

export default DOM_DATA_GETTERS;
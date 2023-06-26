"use strict";

import validateField from "./validate-field.js";

const validateFields = (fields) => {
	let result = true;
	const keys = Object.keys(fields);
	for (const key of keys) {
		if (!validateField(key, fields[key])) result = false;
	}
	console.log(result);
	return result;
}

export default validateFields;
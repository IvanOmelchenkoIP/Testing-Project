"use strict";

import validateFieldNotEmptyAndOfType from "./validate-field-not-emty-and-type.js";

const validateFieldsNotEmptyAndOfType = (
	fields, emptyCallback = null, falseTypeCallback = null
) => {
	let result = true;
	const keys = Object.keys(fields);
	for (const key of keys) {
		const value = fields[key];
		if (
			!validateFieldNotEmptyAndOfType(
				key, value, emptyCallback, falseTypeCallback
			)
		) {
			result = false;
		}
	}
	return result;
}

export default validateFieldsNotEmptyAndOfType;

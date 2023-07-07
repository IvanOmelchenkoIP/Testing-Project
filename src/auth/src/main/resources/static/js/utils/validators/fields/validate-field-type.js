"use strict";

import VALIDATORS from "../validate/validators.js";

const validateFieldOfType = (typeKey, value, falseCallback = null) => {
	const validator = VALIDATORS[typeKey];
	const fieldIsOfType = validator(value);
	if (!fieldIsOfType && falseCallback) falseCallback(typeKey, value);
	return fieldIsOfType;
}

export default validateFieldOfType;

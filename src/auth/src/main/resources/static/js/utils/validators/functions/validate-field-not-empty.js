"use strict";

import VALIDATORS from "../validate/validators.js";

const validateFieldNotEmpty = (typeKey, field, falseCallback = null) => {
	const notEmpty = VALIDATORS.notEmpty(field);
	if (!notEmpty && falseCallback) falseCallback(typeKey, field);
	return notEmpty;
}

export default validateFieldNotEmpty;

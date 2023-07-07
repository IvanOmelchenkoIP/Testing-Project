"use strict";

import VALIDATORS from "../validate/validators.js";

const validateFieldNotNull = (typeKey, field, falseCallback = null) => {
	const notEmpty = VALIDATORS.notEmpty(field);
	if (!notEmpty && falseCallback) falseCallback(typeKey, field);
	return notEmpty;
}

export default validateFieldNotNull;

"use strict";

import validateFieldNotEmpty from "./validate-field-not-empty.js";
import validateFieldOfType from "./validate-field-type.js";

const validateFieldNotEmptyAndOfType = (
	typeKey, value, emptyCallback = null, falseTypeCallback = null
) => {
	if (!validateFieldNotEmpty(typeKey, value, emptyCallback)) return false;
	return validateFieldOfType(typeKey, value, falseTypeCallback);
}

export default validateFieldNotEmptyAndOfType;

"use strict";

const validate = (str, validator) => {
	if (str == null) return false;
	return validator.test(String(str));
}

export default validate;
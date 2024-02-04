"use strict";

import validateFieldNotEmptyAndOfType from "../../../utils/validators/functions/validate-field-not-emty-and-type.js";
import { domSelector } from "../../../utils/html/html-utils.js";
import emptyCallback from "../../callbacks/runtime-callbacks/generic/empty-callback.js";
import authFalseTypeCallback from "../../callbacks/runtime-callbacks/user/validation/false-type-callback.js";

const authSelectAndValidateMediator = (...names) => {
	let valid = true;
	const data = {};
	for (const name of names) {
		const fieldValue = domSelector.selectFirstByName(name);
		data[name] = fieldValue;
		const fieldValid = validateFieldNotEmptyAndOfType(
			name, 
			fieldValue, 
			emptyCallback, 
			authFalseTypeCallback
		);
		if (!fieldValid) valid = false;
	}
	return { valid, data };
}

export default authSelectAndValidateMediator;

"use strict";

import validateFieldsNotEmptyAndOfType from "../../utils/validators/functions/validate-fields-not-empty-and-type.js";
import emptyCallback from "../../callbacks/generic/empty-callback.js";
import authFalseTypeCallback from "../../callbacks/user/validation/false-type-callback.js";

const authValidateMediator = (fields) => {
	return validateFieldsNotEmptyAndOfType(fields, emptyCallback, authFalseTypeCallback);
}

export default authValidateMediator;

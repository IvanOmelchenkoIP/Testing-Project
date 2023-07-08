"use strict";

import fieldsResetCallback from "../../callbacks/generic/fields-reset-callback.js";
import INVALID_AUTH_FIELDS from "../../data/dom-names/ids/user/invalid-auth-fields.js";

const authResetErrorFieldsMediator = (...fieldNames) => {
	const domNames = [];
	for (const field of fieldNames) domNames.push(INVALID_AUTH_FIELDS[field]);
	fieldsResetCallback(...domNames);
}

export default authResetErrorFieldsMediator;

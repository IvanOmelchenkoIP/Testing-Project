"use strict";

import authResetErrorFieldsMediator from "../../../mediators/user/auth-reset-error-mediator.js";
import authSelectAndValidateMediator from "../../../mediators/user/auth-select-and-validate-mediator.js";
import { userAuthService } from "../../../../services/services.js";
import ObjectUtil from "../../../../utils/collections/object/object-util.js";

const FIELD_NAMES = ["username", "passwd"];
const RESET_FIELDS = ObjectUtil.deepCopy(FIELD_NAMES);
RESET_FIELDS.push("error-field");

const loginListenerHandler = () => {
	authResetErrorFieldsMediator(...RESET_FIELDS);
	const { valid, data } = authSelectAndValidateMediator(...FIELD_NAMES);
	if (valid) userAuthService.login(data);
}

export default loginListenerHandler;

"use strict";

import { userAuthService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";
import authResetErrorFieldsMediator from "../../../mediators/user/auth-reset-error-mediator.js";

const FIELD_NAMES = ["username", "email", "passwd"];
const RESET_FIELDS = FIELD_NAMES.push("error-field");

selector.selectById("register-user").addEventListener("click", () => {
	authResetErrorFieldsMediator(...RESET_FIELDS);
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) userAuthService.register(data);
});

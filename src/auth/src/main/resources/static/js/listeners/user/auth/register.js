"use strict";

import { userAuthService } from "../../../services/services.js";
<<<<<<< HEAD
import domSelector from "../../../dom/select/instances/dom-selector.js";
=======
import selector from "../dom/select/dom-selector.js";
>>>>>>> main
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";
import authResetErrorFieldsMediator from "../../../mediators/user/auth-reset-error-mediator.js";
import deepCopy from "../../../utils/generic/deep-copy/deep-copy.js";

const FIELD_NAMES = ["username", "email", "passwd"];
const RESET_FIELDS = deepCopy(FIELD_NAMES);
RESET_FIELDS.push("error-field");

domSelector.selectById("register-user").addEventListener("click", () => {
	authResetErrorFieldsMediator(...RESET_FIELDS);
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) userAuthService.register(data);
});

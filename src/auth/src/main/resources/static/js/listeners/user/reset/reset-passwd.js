"use strict";

import { resetService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";
import authResetErrorFieldsMediator from "../../../mediators/user/auth-reset-error-mediator.js";

const FIELD_NAMES = ["verify-token", "passwd"];
const RESET_FIELDS = FIELD_NAMES.push("error-field");

selector.selectById("reset-passwd").addEventListener("click", () => {
	authResetErrorFieldsMediator(...RESET_FIELDS);
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) resetService.resetPasswd(data);
});

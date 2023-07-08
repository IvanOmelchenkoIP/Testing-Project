"use strict";

import { resetService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";
import authResetErrorFieldsMediator from "../../../mediators/user/auth-reset-error-mediator.js";
import deepCopy from "../../../utils/generic/deep-copy/deep-copy.js";

const FIELD_NAMES = ["email"];
const RESET_FIELDS = deepCopy(FIELD_NAMES);
RESET_FIELDS.push("error-field");

selector.selectById("send-verify-token").addEventListener("click", () => {
	authResetErrorFieldsMediator(...RESET_FIELDS);
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) resetService.verifyEmail(data);
});

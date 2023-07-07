"use strict";

import { resetService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";

const FIELD_NAMES = ["verify-token", "passwd"];

selector.selectById("reset-passwd").addEventListener("click", () => {
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) resetService.resetPasswd(data);});

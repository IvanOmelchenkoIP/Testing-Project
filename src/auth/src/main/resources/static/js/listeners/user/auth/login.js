"use strict";

import { userAuthService } from "../../../services/services.js";
import domSelector from "../../../dom/select/instances/dom-selector.js";
import authValidateMediator from "../../../mediators/user/auth-validate-mediator.js";

const FIELD_NAMES = ["username", "passwd"];

domSelector.selectById("login-user").addEventListener("click", () => {
	const { valid, data } = domSelector.selectAllByNameAndValidate(authValidateMediator, ...FIELD_NAMES);
	if (valid) userAuthService.login(data);
});

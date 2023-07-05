"use strict";

import { userAuthService } from "../../../services/services.js";
import domSelector from "../../../dom/select/instances/dom-selector.js";
import validateFields from "../../../utils/validators/fields/validate-fields.js";

const FIELD_NAMES = ["username", "passwd"];

domSelector.selectById("login-user").addEventListener("click", () => {
	const { valid, data } = domSelector.selectAllByNameAndValidate(validateFields, ...FIELD_NAMES);
	if (valid) userAuthService.login(data);
});

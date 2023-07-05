"use strict";

import { userAuthService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import validateFields from "../../../utils/validators/fields/validate-fields.js";

const FIELD_NAMES = ["username", "email", "passwd"];

selector.selectById("register-user").addEventListener("click", () => {
	const { valid, data } = domSelector.selectAllByNameAndValidate(validateFields, ...FIELD_NAMES);
	if (valid) userAuthService.register(data);
});

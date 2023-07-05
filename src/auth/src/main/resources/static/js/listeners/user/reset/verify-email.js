"use strict";

import { resetService } from "../../../services/services.js";
import selector from "../dom/select/dom-selector.js";
import validateFields from "../../../utils/validators/fields/validate-fields.js";

const FIELD_NAMES = ["email"];

selector.selectById("send-verify-token").addEventListener("click", () => {
	const { valid, data } = domSelector.selectAllByNameAndValidate(validateFields, ...FIELD_NAMES);
	if (valid) resetService.verifyEmail(data);
});
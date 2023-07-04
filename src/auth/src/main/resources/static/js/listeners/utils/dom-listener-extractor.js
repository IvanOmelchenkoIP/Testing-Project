"use strict";

import selector from "../../dom/select/dom-selector.js";
import validateFields from "../../utils/validators/fields/validate-fields.js"

const domExtractor = (names) => {
	const fields = selector.selectData(selector.nameSelector(), ...names);
	return { valid: validateFields(fields), data: fields };
}

export default domExtractor;
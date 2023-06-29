"use strict";

import selector from "../../utils/parsers/dom/dom-selector.js";
import validateFields from "../../utils/validators/fields/validate-fields.js"

const domExtractor = (names) => {
	const fields = selector.selectData(selector.nameSelector(), ...names);
	return { valid: validateFields(fields), data: fields };
}

export default domExtractor;
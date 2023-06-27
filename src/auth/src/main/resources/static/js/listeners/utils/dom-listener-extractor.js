"use strict";

import DOM_DATA_GETTERS from "../../utils/parser/dom/dom-getters.js";
import parseDomData from "../../utils/parser/dom/dom-parser.js";
import validateFields from "../../utils/validators/fields/validate-fields.js"

const domExtractor = (names) => {
	const fields = parseDomData(DOM_DATA_GETTERS.name, ...names);
	return { valid: validateFields(fields), data: fields };
}

export default domExtractor;
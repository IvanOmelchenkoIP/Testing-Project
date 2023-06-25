"use strict";

import DOM_DATA_GETTERS from "../../utils/parser/dom/dom-getters.js";
import parseDomData from "../../utils/parser/dom/dom-parser.js";
import validateFields from "../../utils/validators/fields/validate-fields.js"

const genericDomListener = (names, service) => {
	const fields = parseDomData(DOM_DATA_GETTERS.name, ...names);
	if (validateFields(fields)) service(fields);
}
export default genericDomListener;
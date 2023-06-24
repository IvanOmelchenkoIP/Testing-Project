"use strict";

import { DOM_DATA_GETTERS, parseDomData } from "../utils/parser/dom-parser.js";
import validateFields from "../utils/validators/validate-fields.js";

const genericDomListener = (names, service) => {
	const fields = parseDomData(DOM_DATA_GETTERS.name, ...names);
	if (validateFields(fields)) service(fields);
}
export default genericDomListener;
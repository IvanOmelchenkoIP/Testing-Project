"use strict";

import { DOM_DATA_GETTERS } from "../../utils/dom-parser.js";

const genericMsgFail = (error) => {
	const id = "error-field";
	DOM_DATA_GETTERS.id(id).innerText = error;
}

export default genericMsgFail;
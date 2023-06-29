"use strict";

import INVALID_MSGS from "../data/invalid-msgs.js";
import INVALID_PARAGAPHS from "../data/invalid-paragraphs.js";
import VALIDATORS from "../validate/validators.js";
import selector from "../../parsers/dom/dom-selector.js";

const validateField = (key, value) => {
	const invalidParagraph = selector.selectById(INVALID_PARAGAPHS[key]);
	if (VALIDATORS.empty(value)) {
		invalidParagraph.innerText = INVALID_MSGS.empty;
		return false;
	}
	const validator = VALIDATORS[key];
	if (validator != null) {
		if (!validator(value)) {
			invalidParagraph.innerText = INVALID_MSGS[key];
			return false;
		}
	}
	invalidParagraph.innerText = "";
	return true;
}

export default validateField;
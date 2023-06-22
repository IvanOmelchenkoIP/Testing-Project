"use strict";

import INVALID_MSGS from "./invalid-msgs/js";
import INVALID_PARAGAPHS from "./invalid-paragraphs.js";
import VALIDATORS from "./validator-implementations/validators.js";
import { DOM_DATA_GETTERS } from "../parser/dom-parser.js";

const validateField = (key, value) => {
  const invalidParagraph = DOM_DATA_GETTERS.id(INVALID_PARAGAPHS[key]);
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
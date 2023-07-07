"use string";

import VALIDATOR_EXPRESSIONS from "../../data/expressions/generic-expressions.js"
import validate from "../generic/validate.js";

const validateNotEmpty = (str) => {
	if (str == null || str == undefined || str == '') return false;
	return !validate(str, VALIDATOR_EXPRESSIONS.empty);
}

export default validateNotEmpty;

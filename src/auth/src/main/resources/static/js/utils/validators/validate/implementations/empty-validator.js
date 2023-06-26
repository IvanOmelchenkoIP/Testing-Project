"use string";

import VALIDATOR_EXPRESSIONS from "../../data/validator-expression.js"
import validate from "../generic/validate.js";

const validateEmpty = (str) => {
	if (str == null || str == undefined || str == '') return true;
	return validate(str, VALIDATOR_EXPRESSIONS.empty);
}

export default validateEmpty;

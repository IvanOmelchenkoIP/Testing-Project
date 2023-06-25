"use string";

import VALIDATOR_EXPRESSIONS from "../../data/validator-expression.js"
import validate from "../generic/validate.js";

const validateEmpty = (str) => validate(str, VALIDATOR_EXPRESSIONS.empty);

export default validateEmpty;
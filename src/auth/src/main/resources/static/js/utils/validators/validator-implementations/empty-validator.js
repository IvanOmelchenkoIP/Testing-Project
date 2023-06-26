"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "../generic/validate.js";

const validateEmpty = (str) => validate(str, VALIDATOR_EXPRESSIONS.empty);

export default validateEmpty;
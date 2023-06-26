"use string";

import VALIDATOR_EXPRESSIONS from "../../data/validator-expression.js"
import validate from "../generic/validate.js";

const validateEmail = (email) => validate(email, VALIDATOR_EXPRESSIONS.email);

export default validateEmail;

"use string";

import VALIDATOR_EXPRESSIONS from "../../data/validator-expression.js"
import validate from "../generic/validate.js";

const validatePassword = (password) => validate(password, VALIDATOR_EXPRESSIONS.passwd);

export default validatePassword;
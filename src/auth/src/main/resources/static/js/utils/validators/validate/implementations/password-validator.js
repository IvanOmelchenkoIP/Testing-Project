"use string";

import VALIDATOR_EXPRESSIONS from "../../data/expressions/user-fields-expressions.js"
import validate from "../generic/validate.js";

const validatePassword = (password) => validate(password, VALIDATOR_EXPRESSIONS.passwd);

export default validatePassword;

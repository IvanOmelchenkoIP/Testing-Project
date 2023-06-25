"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "../generic/validate.js";

const validatePassword = (password) => validate(password, VALIDATOR_EXPRESSIONS.passwd);

export default validatePassword;
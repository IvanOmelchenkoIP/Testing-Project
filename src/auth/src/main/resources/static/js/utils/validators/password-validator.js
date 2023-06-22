"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "./validate.js";

const validatePassword = (password) => validate(password, VALIDATOR_EXPRESSIONS.password);

export default validatePassword;
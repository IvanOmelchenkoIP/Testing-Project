"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "../generic/validate.js";

const validateEmail = (email) => validate(email, VALIDATOR_EXPRESSIONS.email);

export default validateEmail;

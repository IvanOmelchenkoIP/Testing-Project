"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "../generic/validate.js";

const validateUsername = (username) => validate(username, VALIDATOR_EXPRESSIONS.username);

export default validateUsername;

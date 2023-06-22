"use string";

import { validate, VALIDATOR_EXPRESSIONS } from "./validate.js";

const validateUsername = (username) => validate(username, VALIDATOR_EXPRESSIONS.username);

export default validateUsername;

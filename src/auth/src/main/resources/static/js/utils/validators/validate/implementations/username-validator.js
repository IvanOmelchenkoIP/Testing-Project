"use string";

import VALIDATOR_EXPRESSIONS from "../../data/validator-expression.js"
import validate from "../generic/validate.js";

const validateUsername = (username) => validate(username, VALIDATOR_EXPRESSIONS.username);

export default validateUsername;

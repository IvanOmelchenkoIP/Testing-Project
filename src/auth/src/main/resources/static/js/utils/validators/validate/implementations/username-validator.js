"use string";

import VALIDATOR_EXPRESSIONS from "../../data/expressions/user-fields-expressions.js"
import validate from "../generic/validate.js";

const validateUsername = (username) => validate(username, VALIDATOR_EXPRESSIONS.username);

export default validateUsername;

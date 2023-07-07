"use string";

import VALIDATOR_EXPRESSIONS from "../../data/expressions/user-fields-expressions.js";
import validate from "../generic/validate.js";

const validateEmail = (email) => validate(email, VALIDATOR_EXPRESSIONS.email);

export default validateEmail;

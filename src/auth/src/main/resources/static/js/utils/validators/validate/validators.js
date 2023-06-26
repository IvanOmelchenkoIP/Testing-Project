"use strict";

import validateEmail from "./implementations/email-validator.js";
import validatePassword from "./implementations/password-validator.js";
import validateUsername from "./implementations/username-validator.js";
import validateEmpty from "./implementations/empty-validator.js";

const VALIDATORS = {
	email: validateEmail,
	passwd: validatePassword,
	username: validateUsername,
	empty: validateEmpty,
}

export default VALIDATORS;
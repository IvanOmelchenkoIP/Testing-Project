"use strict";

import validateEmail from "./implementations/email-validator.js";
import validatePassword from "./implementations/password-validator.js";
import validateUsername from "./implementations/username-validator.js";
import validateNotEmpty from "./implementations/not-empty-validator.js";

const VALIDATORS = {
	email: validateEmail,
	passwd: validatePassword,
	username: validateUsername,
	notEmpty: validateNotEmpty,
}

export default VALIDATORS;
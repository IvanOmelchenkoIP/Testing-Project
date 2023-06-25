"use strict";

import emailValidator from "./implementations/email-validator.js";
import passwordValidator from "./implementations/password-validator.js";
import usernameValidator from "./implementations/username-validator.js";
import emptyValidator from "./implementations/empty-validator.js";

const VALIDATORS = {
	email: emailValidator,
	passwd: passwordValidator,
	username: usernameValidator,
	empty: emptyValidator,
}

export default VALIDATORS;
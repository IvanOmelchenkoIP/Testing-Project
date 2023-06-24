"use strict";

import emailValidator from "./email-validator.js";
import passwordValidator from "./password-validator.js";
import usernameValidator from "./username-validator.js";
import emptyValidator from "./empty-validator.js";

const VALIDATORS = {
	email: emailValidator,
	passwd: passwordValidator,
	username: usernameValidator,
	empty: emptyValidator,
}

export default VALIDATORS;
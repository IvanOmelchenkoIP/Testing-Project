"use strict";

const USER_FIELDS_VALIDATOR_EXPRESSIONS = {
	email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	username: /^[A-Za-z_][A-Za-z0-9_-]{2,64}$/,
	passwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,86}$/,
	empty: /\A\s*\z/,
}

export default USER_FIELDS_VALIDATOR_EXPRESSIONS;

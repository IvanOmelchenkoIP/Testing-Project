"use strict";

const auth = {
	register: "register-user",
	login: "login-user",
	logout: "logout-user"
}

const account = {
	sendVerifyEmailToken: "send-verify-email-token",
	resetPassword: "reset-passwd"
}

const USER_DOM_FIELDS_IDS = {
	auth, account
}

export default USER_DOM_FIELDS_IDS;

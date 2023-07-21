"use strict";

class AccountService {
	#emailVerifyService;
	#passwordResetService;

	constructor(emailVerifyService, passwordResetService) {
		this.#emailVerifyService = emailVerifyService;
		this.#passwordResetService = passwordResetService;
	}

	verifyEmail(...params) {
		this.#emailVerifyService.execute(...params);
	}

	resetPassword(...params) {
		this.#passwordResetService.execute(...params);
	}
}

export default AccountService;

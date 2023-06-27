"use strict";

class UserAuthService {
	#registerService;
	#loginService;
	#logoutService;
	constructor(registerService, loginService, logoutService) {
		this.#registerService = registerService;
		this.#loginService = loginService;
		this.#logoutService = logoutService;
	}

	register(...params) {
		this.#registerService.execute(...params);
	}

	login(...params) {
		this.#loginService.execute(...params);
	}

	logout(...params) {
		this.#logoutService.execute(...params);
	}
}

export default UserAuthService;

"use strict";

class AbstractService {
	_route;

	constructor(route) {
		if (this.constructor == AbstractAuthService) {
			throw new Error("Can`t make an instance of abstract class AuthService!");
		}
		this._route = route;
	}

	execute(...args) {
		throw new Error(
			"Can`t execute abstract method of abstract class AuthService!"
		);
	}
}

export default AbstractService;

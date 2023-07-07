"use strict";

import AbstractService from "../../abstract-service/abstract-service.js"
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import authCookiesCallback from "../../../../../../callbacks/user/auth/auth-cookies-callback.js";
import authSuccessCallback from "../../../../../../callbacks/user/auth/auth-success-callback.js";
import authErrorCallback from "../../../../../../callbacks/user/auth/auth-error-callback.js";

class RegisterService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new RegisterService(route);
	}

	execute(userData) {
		fetchUtil.post({ 
			route: this._route,
			json: userData, 
			resSuccessCallback: authSuccessCallback, 
			resErrorCallback: authErrorCallback,
			cookiesCallback: authCookiesCallback
		});
	}
}

export default RegisterService;

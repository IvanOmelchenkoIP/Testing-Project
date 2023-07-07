"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import authCookiesCallback from "../../../../../../callbacks/user/auth/auth-cookies-callback.js";
import authSuccessCallback from "../../../../../../callbacks/user/auth/auth-success-callback.js";
import authErrorCallback from "../../../../../../callbacks/user/auth/auth-error-callback.js";
import jsonHeaderMediator from "../../../../../../mediators/fetch/headers/json-header-mediator.js";

class RegisterService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new RegisterService(route);
	}

	execute(userData) {
		const jsonHeaders = jsonHeaderMediator();
		fetchUtil.post({ 
			route: this._route,
			headers: jsonHeaders,
			json: userData, 
			resSuccessCallback: authSuccessCallback, 
			resErrorCallback: authErrorCallback,
			cookiesCallback: authCookiesCallback
		});
	}
}

export default RegisterService;

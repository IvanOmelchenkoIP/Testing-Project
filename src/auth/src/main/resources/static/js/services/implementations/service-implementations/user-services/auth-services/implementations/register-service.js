"use strict";

import AbstractService from "../../abstract-service/abstract-service.js"
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import authCookiesCallback from "../../../../../../callbacks/user/auth/auth-cookies-callback.js";
import authSuccessCallback from "../../../../../../callbacks/user/auth/auth-success-callback.js";
import setIdInnerHtmlCallback from "../../../../../../callbacks/generic/set-id-html-callback.js";

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
			resErrorCallback: setIdInnerHtmlCallback,
			cookiesCallback: authCookiesCallback
		});
	}
}

export default RegisterService;

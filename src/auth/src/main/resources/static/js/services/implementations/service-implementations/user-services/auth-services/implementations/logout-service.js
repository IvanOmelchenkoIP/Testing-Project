"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
import allHeadersMediator from "../../../../../../mediators/fetch/headers/all-headers-mediator.js";
import logoutCallback from "../../../../../../callbacks/user/auth/logout-callback.js";

class LogoutService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new LogoutService(route);
	}

	execute(...params) {
		const allHeaders = allHeadersMediator();
		fetchUtil.post({ route: this._route, headers: allHeaders, sresSuccessCallback: logoutCallback });
	}
}

export default LogoutService;

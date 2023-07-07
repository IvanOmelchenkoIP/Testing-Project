"use strict";

import AbstractService from "../../abstract-service/abstract-service.js"
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";

class LogoutService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		new LogoutService(route);
	}

	execute(...params) {
		fetchUtil.post({ route: this._route });
	}
}

export default LogoutService;

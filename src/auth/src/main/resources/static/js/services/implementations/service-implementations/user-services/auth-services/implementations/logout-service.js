"use strict";

import AbstractService from "../../abstract-service/abstract-service.js"
import { post } from "../../../utils/fetch/methods/fetch-methods.js"

class LogoutService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		new LogoutService(route);
	}

	execute(...params) {
		post({ route: this._route });
	}
}

export default LogoutService;

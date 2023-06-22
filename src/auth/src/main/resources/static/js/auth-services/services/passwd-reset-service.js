"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";

class PasswordResetService extends AbstractAuthService {
	constructor(route) {
		super(route);
	}
	
	static withRoute(route) {
		return new EmailService(route);
	}
	
	execute(token, password) {
		const userData = parseDomData(DOM_DATA_GETTERS.name, token, password);
		post({ route: this._route, json: userData });
	}
}

export default PasswordResetService;
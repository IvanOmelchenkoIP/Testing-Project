"use strict";

import AbstractService from "../../abstract-service/abstract-service.js";
import { post } from "../../../utils/fetch/methods/fetch-methods.js";
import authSuccess from "../../callbacks/auth-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";

class RegisterService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new RegisterService(route);
	}

	execute(userData) {
		post({ route: this._route, json: userData, successCallback: authSuccess, errorCallback: genericMsgFail });
	}
}

export default RegisterService;

"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
/*import passwdResetSuccess from "../../callbacks/passwd-reset-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";*/
import jsonHeaderMediator from "../../../../../../mediators/fetch/headers/json-header-mediator.js";

class PasswordResetService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new PasswordResetService(route);
	}

	execute(userData) {
		const jsonHeaders = jsonHeaderMediator();
		fetchUtil.post({
			route: this._route,
			headers: jsonHeaders,
			json: userData,
			//successCallback: passwdResetSuccess,
			//errorCallback: genericMsgFail
		});
	}
}

export default PasswordResetService;

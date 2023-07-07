"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
/*import passwdResetSuccess from "../../callbacks/passwd-reset-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";*/

class PasswordResetService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new PasswordResetService(route);
	}

	execute(userData) {
		fetchUtil.post({
			route: this._route,
			json: userData,
			//successCallback: passwdResetSuccess,
			//errorCallback: genericMsgFail
		});
	}
}

export default PasswordResetService;

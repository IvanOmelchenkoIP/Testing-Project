"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
/*import emailVerifySuccess from "../../callbacks/email-verify-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";*/

class EmailVerifyService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new EmailVerifyService(route);
	}

	execute(userData) {
		fetchUtil.post({ 
			route: this._route, 
			json: userData, 
			//successCallback: emailVerifySuccess, 
			//errorCallback: genericMsgFail 
		});
	}
}

export default EmailVerifyService;

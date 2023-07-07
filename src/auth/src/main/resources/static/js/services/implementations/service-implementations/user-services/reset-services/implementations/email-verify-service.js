"use strict";

import AbstractService from "../../../../../abstract-service/abstract-service.js";
import { fetchUtil } from "../../../../../../utils/fetch/instances/fetch-util/fetch-utils.js";
/*import emailVerifySuccess from "../../callbacks/email-verify-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";*/
import jsonHeaderMediator from "../../../../../../mediators/fetch/headers/json-header-mediator.js";

class EmailVerifyService extends AbstractService {
	constructor(route) {
		super(route);
	}

	static withRoute(route) {
		return new EmailVerifyService(route);
	}

	execute(userData) {
		const jsonHeaders = jsonHeaderMediator();
		fetchUtil.post({ 
			route: this._route,
			headers: jsonHeaders, 
			json: userData, 
			//successCallback: emailVerifySuccess, 
			//errorCallback: genericMsgFail 
		});
	}
}

export default EmailVerifyService;

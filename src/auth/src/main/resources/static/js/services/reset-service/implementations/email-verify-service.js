"use strict";

import AbstractAuthService from "../../abstract-service/abstract-service.js"
import { post } from "../../../utils/fetch/methods/fetch-methods.js"
import emailVerifySuccess from "../../callbacks/email-verify-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";

class EmailVerifyService extends AbstractAuthService {
	constructor(route) {
		super(route);
	}
	
	static withRoute(route) {
		return new EmailService(route);
	}
	
	execute(userData) {
		post({ route: this._route, json: userData, successCallback: emailVerifySuccess, errorCallback: genericMsgFail });
	}
}

export default EmailVerifyService;
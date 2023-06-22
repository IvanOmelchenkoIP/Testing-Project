"use strict";

import AbstractAuthService from "../../abstract-service/abstract-service.js"
import { post } from "../../../utils/fetch/methods/fetch-methods.js"
import passwdResetSuccess from "../../callbacks/passwd-reset-success.js";
import genericMsgFail from "../../callbacks/generic-msg-fail.js";

class PasswordResetService extends AbstractAuthService {
  constructor(route) {
	super(route);
  }
	
  static withRoute(route) {
	return new EmailService(route);
  }
	
  execute(userData) {
	post({ route: this._route, json: userData, successCallback: passwdResetSuccess, errorCallback: genericMsgFail});
  }
}

export default PasswordResetService;
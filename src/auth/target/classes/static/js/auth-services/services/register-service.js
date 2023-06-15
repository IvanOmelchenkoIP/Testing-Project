"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { post } from "../../fetch/methods/fetch-methods.js";
import { successCallback, errorCallback } from "../../fetch/callbacks/auth-callbacks.js";

class RegisterService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    return new RegisterService(route);
  }

  execute(username, email, passwd) {
    const userData = parseDomData(
      DOM_DATA_GETTERS.name,
      username,
      email,
      passwd
    );
    post({ route: this._route, json: userData, successCallback: successCallback, errorCallback: errorCallback });
  }
}

export default RegisterService;

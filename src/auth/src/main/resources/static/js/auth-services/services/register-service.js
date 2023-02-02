"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import fetchJson from "../../utils/fetch-data.js";

class RegisterService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    return new RegisterService(route);
  }

  execute(username, email, passwd) {
    console.log(this._route);
    const userData = parseDomData(
      DOM_DATA_GETTERS.name,
      username,
      email,
      passwd
    );
    const response = fetchJson("POST", this._route, userData);
    console.log(response);
    return response;
  }
}

export default RegisterService;

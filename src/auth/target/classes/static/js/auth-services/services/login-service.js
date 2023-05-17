"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import fetchData from "../../utils/fetch-data.js";

class LoginService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    return new LoginService(route);
  }

  execute(username, passwd) {
    const userData = parseDomData(DOM_DATA_GETTERS.name, username, passwd);
    const response = fetchData("POST", this._route, userData);
    return response;
  }
}

export default LoginService;

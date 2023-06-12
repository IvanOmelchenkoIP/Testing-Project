"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { post } from "../../utils/fetch/fetch-methods.js";
//import fetchData from "../../utils/fetch/fetch-data.js";

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
    const response = post(this._route, userData);
    console.log("Res: " + response/*.message*/);
    return response;
  }
}

export default RegisterService;

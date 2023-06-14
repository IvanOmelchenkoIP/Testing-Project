"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { post } from "../../fetch/methods/fetch-methods.js";

class LogoutService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    new LogoutService(route);
  }

  execute(username, passwd) {
	const userData = parseDomData(
      DOM_DATA_GETTERS.name,
      username,
      passwd
    );
    post({ route: this._route });
  }
}

export default LogoutService;

"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { post } from "../../fetch/methods/fetch-methods.js";

class LogoutService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    new LogoutService(route);
  }

  execute(...params) {
    post({ route: this._route });
  }
}

export default LogoutService;

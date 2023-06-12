"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import { post } from "../../utils/fetch/fetch-methods.js";

class LogoutService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    new LogoutService(route);
  }

  execute() {
    const response = post(this._route);
    return response;
  }
}

export default LogoutService;

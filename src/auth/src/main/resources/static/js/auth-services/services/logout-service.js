"use strict";

import AbstractAuthService from "./abstract-auth-service.js";
import fetchData from "../../utils/fetch-data.js";

class LogoutService extends AbstractAuthService {
  constructor(route) {
    super(route);
  }

  static withRoute(route) {
    new LogoutService(route);
  }

  execute() {
    const response = fetchData("POST", this._route);
    return response;
  }
}

export default LogoutService;

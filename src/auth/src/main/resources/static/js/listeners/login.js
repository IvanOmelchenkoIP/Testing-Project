"use strict";

import { userAuthService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

const names = ["username", "passwd"];

DOM_DATA_GETTERS.id("login-user").addEventListener("click", () => {
  userAuthService.login(...names);
});
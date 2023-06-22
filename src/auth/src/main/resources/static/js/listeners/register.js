"use strict";

import { userAuthService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

const names = ["username", "email", "passwd"];

DOM_DATA_GETTERS.id("register-user").addEventListener("click", () => {
  userAuthService.register(...names);
});

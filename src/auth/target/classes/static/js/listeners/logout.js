"use strict";

import userService from "../auth-services/user.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

DOM_DATA_GETTERS.id("login-user").addEventListener("click", () => {
  userService.logout();
});



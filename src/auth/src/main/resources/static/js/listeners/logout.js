"use strict";

import { userAuthService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

DOM_DATA_GETTERS.id("logout-user").addEventListener("click", () => {
  userAuthService.logout({});
});



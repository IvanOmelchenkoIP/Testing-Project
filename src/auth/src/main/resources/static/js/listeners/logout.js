"use strict";

import { userAuthService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";
import genericListener from "./listeners-archetypes/generic-listener.js";

DOM_DATA_GETTERS.id("logout-user").addEventListener("click", () => {
  genericListener(userAuthService.logout);
});



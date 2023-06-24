"use strict";

import { userAuthService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";
import genericDomListener from "./listeners-archetypes/generic-dom-listener.js";

const names = ["username", "passwd"];

DOM_DATA_GETTERS.id("login-user").addEventListener("click", () => {
	genericDomListener(names, userAuthService.login)
});
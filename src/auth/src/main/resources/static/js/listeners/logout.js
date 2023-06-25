"use strict";

import { userAuthService } from "../services/services.js";
import DOM_DATA_GETTERS from "../../utils/parser/dom/dom-getters.js";
import genericListener from "./listeners-archetypes/generic-listener.js";

DOM_DATA_GETTERS.id("logout-user").addEventListener("click", () => {
	genericListener(userAuthService.logout);
});



"use strict";

import { resetService } from "../services/services.js";
import DOM_DATA_GETTERS from "../utils/parser/dom/dom-getters.js";
import genericDomListener from "./listeners-archetypes/generic-dom-listener.js";

const names = ["verify-token", "passwd"];

DOM_DATA_GETTERS.id("reset-passwd").addEventListener("click", () => {
	genericDomListener(names, resetService.resetPassword);
});

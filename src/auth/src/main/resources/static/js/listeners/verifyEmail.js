"use strict";

import { resetService } from "../services/services.js";
import DOM_DATA_GETTERS from "../../utils/parser/dom/dom-getters.js";
import genericDomListener from "./listeners-archetypes/generic-dom-listener.js";

const names = ["email"];

DOM_DATA_GETTERS.id("send-verify-token").addEventListener("click", () => {
	genericDomListener(names, resetService.verifyEmail);
});
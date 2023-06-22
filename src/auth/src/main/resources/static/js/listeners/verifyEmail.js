"use strict";

import { resetService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

const names = ["email"];

DOM_DATA_GETTERS.id("send-verify-token").addEventListener("click", () => {
  resetService.verifyEmail(...names);
});
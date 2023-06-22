"use strict";

import { resetService } from "../auth-services/services.js";
import { DOM_DATA_GETTERS } from "../utils/dom-parser.js";

const names = ["verify-token", "passwd"];

DOM_DATA_GETTERS.id("reset-passwd").addEventListener("click", () => {
  resetService.resetPassword(...names);
});

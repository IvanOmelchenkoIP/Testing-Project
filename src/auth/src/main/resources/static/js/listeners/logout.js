"use strict";

import { userAuthService } from "../services/services.js";
import selector from "../utils/parsers/dom/dom-selector.js";

selector.selectById("logout-user").addEventListener("click", () => {
	console.log("working");
	userAuthService.logout({});
});

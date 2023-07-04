"use strict";

import { userAuthService } from "../services/services.js";
import selector from "../dom/select/dom-selector.js";

selector.selectById("logout-user").addEventListener("click", () => {
	console.log("working");
	userAuthService.logout({});
});

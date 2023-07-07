"use strict";

import { userAuthService } from "../../../services/services.js";
import domSelector from "../../../dom/select/instances/dom-selector.js";

domSelector.selectById("logout-user").addEventListener("click", () => {
	console.log("working");
	userAuthService.logout({});
});

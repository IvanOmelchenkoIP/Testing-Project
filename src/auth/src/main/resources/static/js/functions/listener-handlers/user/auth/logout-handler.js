"use strict";

import { userAuthService } from "../../../../services/services.js";

const logoutListenerHandler = () => {
	console.log("working");
	userAuthService.logout({});
}

export default logoutListenerHandler;

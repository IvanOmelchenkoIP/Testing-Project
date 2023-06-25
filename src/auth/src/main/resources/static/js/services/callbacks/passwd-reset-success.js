"use strict";

import { get } from "../../utils/fetch/methods/fetch-methods.js";
import ROUTES from "../../data/routes/routes.js";

const passwdResetSuccess = (...args) => {
	const REDIRECT_ROUTE = ROUTES.login;
	get({ route: REDIRECT_ROUTE });
}

export default passwdResetSuccess;
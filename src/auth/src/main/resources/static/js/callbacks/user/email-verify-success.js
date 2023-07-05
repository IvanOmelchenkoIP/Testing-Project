"use strict";

import { get } from "../../utils/fetch/methods/fetch-methods.js";
import ROUTES from "../../data/routes/routes.js";

const emailVerifySuccess = (...args) => {
	const REDIRECT_ROUTE = ROUTES.resetPassword;
	get({ route: REDIRECT_ROUTE });
}

export default emailVerifySuccess;
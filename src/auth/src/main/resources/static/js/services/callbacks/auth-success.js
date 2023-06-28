"use strict";

import { getJwt } from "../../utils/fetch/jwt/jwt-fetch-methods.js";
import ROUTES from "../../data/routes/routes.js";
import { cookiesProcessor } from "../../data/storage/storages.js";

const authSuccess = (username, token) => {
	const REDIRECT_ROUTE = ROUTES.workspace;
	cookiesProcessor.setCookie("username", username);
	cookiesProcessor.setCookie("jwtToken", token);
	getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

export default authSuccess;
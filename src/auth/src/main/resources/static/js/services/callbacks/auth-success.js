"use strict";

import { getJwt } from "../../utils/fetch/jwt/jwt-fetch-methods.js";
import ROUTES from "../../data/routes/routes.js";
import { cookiesProcessor } from "../../data/storage/storages.js";

const authSuccess = (response) => {
	const REDIRECT_ROUTE = ROUTES.workspace;
	const responseParts = response.split(";");
	const username = responseParts[0].split("=").pop();
	cookiesProcessor.setCookie("username", username, 1);
	const token = responseParts[1].split("=").pop();
	cookiesProcessor.setCookie("jwtToken", token, 1);
	getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

export default authSuccess;
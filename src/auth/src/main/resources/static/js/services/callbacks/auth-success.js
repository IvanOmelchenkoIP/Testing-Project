"use strict";

import { getJwt } from "../../utils/fetch/jwt/jwt-fetch-methods.js";
import ROUTES from "../../data/routes.js";

const authSuccess = (token) => {
	const REDIRECT_ROUTE = ROUTES.user;
	getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

export default authSuccess;
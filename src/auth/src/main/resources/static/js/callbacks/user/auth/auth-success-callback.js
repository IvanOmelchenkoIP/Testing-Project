"use strict";

//import { getJwt } from "../../utils/fetch/jwt/jwt-fetch-methods.js";
import ROUTES from "../../../data/routes/routes.js";
import { cookiesProcessor } from "../../../data/storage/storages.js";

const authSuccess = (response) => {
	const REDIRECT_ROUTE = ROUTES.workspace;
	/*const REDIRECT_ROUTE = ROUTES.workspace;
	getJwt({ route: REDIRECT_ROUTE, jwtToken: token });*/
	const jwt = cookiesProcessor.getCookie("jwtToken");
	console.log(jwt);
}

export default authSuccess;
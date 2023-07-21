"use strict";

import { cookiesProcessor } from "../../../data/storage/storages.js";

const authSetCookiesCallback = (response) => {
	const responseParts = response.split(";");
	const username = responseParts[0].split("=").pop();
	cookiesProcessor.setCookie("username", username, 1);
	const token = responseParts[1].split("=").pop();
	cookiesProcessor.setCookie("jwtToken", token, 1);
}

export default authSetCookiesCallback;

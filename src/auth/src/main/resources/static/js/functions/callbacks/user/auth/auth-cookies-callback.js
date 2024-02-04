"use strict";

import { cookiesProcessor } from "../../../data/storage/storages.js";

const authSetCookiesCallback = (response) => {
	cookiesProcessor.setCookie("username", response);
}

export default authSetCookiesCallback;

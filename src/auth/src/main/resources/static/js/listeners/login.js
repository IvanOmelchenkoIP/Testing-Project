"use strict";

import { userAuthService } from "../services/services.js";
import selector from "../dom/select/dom-selector.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["username", "passwd"];

selector.selectById("login-user").addEventListener("click", () => {
	const { valid, data } = domExtractor(names);
	if (valid) userAuthService.login(data);
});

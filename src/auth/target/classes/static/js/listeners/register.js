"use strict";

import { userAuthService } from "../services/services.js";
import DOM_DATA_GETTERS from "../utils/parser/dom/dom-getters.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["username", "email", "passwd"];

DOM_DATA_GETTERS.id("register-user").addEventListener("click", () => {
	const { valid, data } = domExtractor(names);
	if (valid) userAuthService.register(data);
});

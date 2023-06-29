"use strict";

import { userAuthService } from "../services/services.js";
import selector from "../utils/parsers/dom/dom-selector.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["username", "email", "passwd"];

selector.selectById("register-user").addEventListener("click", () => {
	const { valid, data } = domExtractor(names);
	if (valid) userAuthService.register(data);
});

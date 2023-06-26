"use strict";

import { resetService } from "../services/services.js";
import DOM_DATA_GETTERS from "../utils/parser/dom/dom-getters.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["email"];

DOM_DATA_GETTERS.id("send-verify-token").addEventListener("click", () => {
	const { valid, data } = domExtractor(names);
	if (valid) resetService.verifyEmail(data);
});
"use strict";

import { resetService } from "../services/services.js";
import selector from "../dom/select/dom-selector.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["email"];

selector.selectById("send-verify-token").addEventListener("click", () => {
	const { valid, data } = domExtractor(names);
	if (valid) resetService.verifyEmail(data);
});
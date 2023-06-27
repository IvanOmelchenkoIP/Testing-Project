"use strict";

import { resetService } from "../services/services.js";
import DOM_DATA_GETTERS from "../utils/parser/dom/dom-getters.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["verify-token", "passwd"];

DOM_DATA_GETTERS.id("reset-passwd").addEventListener("click", () => {
const { valid, data } = domExtractor(names);
	if (valid) resetService.resetPasswd(data);});

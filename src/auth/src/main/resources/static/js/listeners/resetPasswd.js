"use strict";

import { resetService } from "../services/services.js";
import selector from "../utils/parsers/dom/dom-selector.js";
import domExtractor from "./utils/dom-listener-extractor.js";

const names = ["verify-token", "passwd"];

selector.selectById("reset-passwd").addEventListener("click", () => {
const { valid, data } = domExtractor(names);
	if (valid) resetService.resetPasswd(data);});

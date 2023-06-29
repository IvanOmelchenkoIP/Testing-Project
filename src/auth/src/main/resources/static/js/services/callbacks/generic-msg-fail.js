"use strict";

import selector from "../../utils/parsers/dom/dom-selector.js";

const genericMsgFail = (error) => {
	const id = "error-field";
	selector.selectById(id).innerText = error;
}

export default genericMsgFail;
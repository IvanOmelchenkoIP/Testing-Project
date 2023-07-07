"use strict";

import GENERIC_ERRORS from "../..//data/errors/generic/generic-errors.js";
import INVALID_AUTH_FIELDS from "../..//data/dom-names/ids/user/invalid-auth-fields.js";
import setIdInnerHtml from "../../dom/set/implementations/set-id-html.js";

const emptyCallback = (fieldType) => {
	const domName = INVALID_AUTH_FIELDS[fieldType];
	const html = GENERIC_ERRORS.empty;
	setIdInnerHtml(domName, html);
}

export default emptyCallback;

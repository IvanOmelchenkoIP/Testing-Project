"use strict";

import GENERIC_ERRORS from "../..//data/errors/generic/generic-errors.js";
import INVALID_AUTH_FIELDS from "../..//data/dom-names/ids/user/invalid-auth-fields.js";
import setIdHtmlMessageCallback from "./set-id-html-message-callback.js";

const emptyCallback = (typeKey) => {
	setIdHtmlMessageCallback(typeKey, INVALID_AUTH_FIELDS, GENERIC_ERRORS, "error");
}

export default emptyCallback;

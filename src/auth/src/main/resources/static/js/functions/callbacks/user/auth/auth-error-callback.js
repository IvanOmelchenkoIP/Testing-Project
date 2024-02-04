"use strict";

import INVALID_AUTH_FIELDS from "../../../data/dom-names/ids/user/invalid-auth-fields.js";
import USER_FORMS_RESPONSE_ERRORS from "../../../data/errors/user/user-forms-response-errors.js";
import setIdInnerHtmlCallback from "../../generic/set-id-html-message-callback.js";

const authErrorCallback = (err) => {
	setIdInnerHtmlCallback("error-field", INVALID_AUTH_FIELDS, USER_FORMS_RESPONSE_ERRORS, err);
}

export default authErrorCallback;

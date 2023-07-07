"use strict";

import USER_AUTH_FIELDS_VALIDATE_TYPE_ERRORS from "../../../data/errors/user/user-forms-validate-type--errors.js";
import INVALID_AUTH_FIELDS from "../../../data/dom-names/ids/user/invalid-auth-fields.js";
import setIdHtmlMessageCallback from "../../generic/set-id-html-message-callback.js";

const authFalseTypeCallback = (typeKey) => {
	setIdHtmlMessageCallback(typeKey, INVALID_AUTH_FIELDS, USER_AUTH_FIELDS_VALIDATE_TYPE_ERRORS);
}

export default authFalseTypeCallback;

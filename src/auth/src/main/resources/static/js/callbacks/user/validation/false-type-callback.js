"use strict";

import USER_AUTH_FIELDS_VALIDATE_TYPE_ERRORS from "../../../data/errors/user/user-forms-validate-type--errors.js";
import INVALID_AUTH_FIELDS from "../../../data/dom-names/ids/user/invalid-auth-fields.js";
import setIdInnerHtml from "../../../dom/set/implementations/set-id-html.js";

const authFalseTypeCallback = (typeKey) => {
	const domName = INVALID_AUTH_FIELDS[typeKey];
	const html = USER_AUTH_FIELDS_VALIDATE_TYPE_ERRORS[typeError];
	setIdInnerHtml(domName, html);
}

export default authFalseTypeCallback;

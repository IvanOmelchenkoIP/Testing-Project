"use strict";

import setBlankIdInnerHtml from "../../dom/set/implementations/blank/set-blank-id-html.js"; 

const fieldsResetCallback = (...fields) => {
	for (const field of fields) setBlankIdInnerHtml(field);
}

export default fieldsResetCallback;

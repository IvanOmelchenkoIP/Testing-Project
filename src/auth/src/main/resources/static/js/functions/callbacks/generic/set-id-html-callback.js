"use strict";

import { htmlSetter } from "../../../utils/html/html-utils.js";

const setIdInnerHtmlCallback = (id, html) => {
	htmlSetter.setIdInnerHtml(id, html);
}

export default setIdInnerHtmlCallback;

"use strict";

import setIdInnerHtmlCallback from "./set-id-html-callback.js";

const setIdHtmlMessageCallback = (
	domName, domCollection, htmlCollection, htmlName = null
) => {
	const domId = domCollection[domName];
	const html = htmlName ? htmlCollection[htmlName] : htmlCollection[domName];
	setIdInnerHtmlCallback(domId, html);
}

export default setIdHtmlMessageCallback;

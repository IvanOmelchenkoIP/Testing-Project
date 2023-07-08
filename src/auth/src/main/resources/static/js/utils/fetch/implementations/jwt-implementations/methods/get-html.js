"use strict";

import getHtml from "../../generic-implementations/methods/get-html.js";
import headersProcessor from "../../../instances/headers-processor/headers-processor.js";

const getHtmlJwt = ({
	route,
	headers,
	jwtToken,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
}) => {
	const { Authorization } = headers;
	const jwtHeader = headersProcessor.addToHeader({ Authorization: Authorization }, jwtToken);
	headers.Authorization = jwtHeader.Authorization;
	getHtml({
		route: route,
		headers: headers,
		htmlCallback: htmlCallback,
		routeCallback: routeCallback,
		errorCallback: errorCallback,
		sessionStorageCallback: sessionStorageCallback
	});
};

export default getHtmlJwt;

"use strict";

import { getHtml as genericGetHtml } from "../../generic-implementations/methods/get-html.js";
import headersProcessor from "../../../instances/headers-processor/headers-processor.js";

const getHtml = ({
	route,
	headers,
	jwtToken,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
}) => {
	const { Authorization } = headersProcessor.addToHeader(headers.Authorization, jwtToken);
	headers.Authorization = Authorization;
	genericGetHtml({
		route: route,
		headers: headers,
		htmlCallback: htmlCallback,
		routeCallback: routeCallback,
		errorCallback: errorCallback,
		sessionStorageCallback: sessionStorageCallback
	});
};

export default getHtml;

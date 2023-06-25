"use strict";

import BASE_ROUTE from "../../../data/routes/base-route.js"
import { FETCH_HEADERS, FETCH_METHODS } from "../fetch-consts.js";
import { createHeaders } from "../headers/headers.js";

const get = ({
	route,
	headers = null,
	successCallback = null,
	errorCallback = null
}) => {
	const fullRoute = BASE_ROUTE + route;
	console.log("called get - " + FETCH_METHODS.get + " r - " + fullRoute + " h " + JSON.stringify(headers));
	if (headers == null) headers = createHeaders(FETCH_HEADERS.acceptAll, FETCH_HEADERS.contentTypeAll);
	fetch(fullRoute, {
		method: METHODS.get,
		headers: headers,
	})
		.then((response) => {
			return response.text();
		})
		.then((pageText) => {
			window.history.pushState(null, null, fullRoute);
			document.body.innerHTML = pageText;
		});
};

export default get;

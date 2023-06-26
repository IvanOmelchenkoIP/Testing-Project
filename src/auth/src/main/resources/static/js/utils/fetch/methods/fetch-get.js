"use strict";

import BASE_ROUTE from "../../../data/routes/base-route.js"
import { FETCH_HEADERS, FETCH_METHODS } from "../data/fetch-data.js";
import { createHeaders } from "../headers/headers.js";

const get = ({
	route,
	headers = null,
	successCallback = null,
	errorCallback = null
}) => {
	const fullRoute = BASE_ROUTE + route;
	if (headers == null) headers = createHeaders(FETCH_HEADERS.acceptAll, FETCH_HEADERS.contentTypeAll);
	fetch(fullRoute, {
		method: FETCH_METHODS.get,
		headers: headers,
	})
		.then((response) => {
			return response.text();
		})
		.then((pageText) => {
			window.history.replaceState(null, null, fullRoute);
			document.body.innerHTML = pageText;
		});
};

export default get;

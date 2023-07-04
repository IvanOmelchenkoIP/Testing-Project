"use strict";

import BASE_ROUTE from "../../../data/routes/base-route.js"
import { FETCH_HEADERS, FETCH_METHODS } from "../data/fetch-data.js";
import { createHeaders } from "../headers/headers.js";

const get = ({
	route,
	headers = null,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
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
		.then((html) => {
			if (htmlCallback) htmlCallback(html);
			if (sessionStorageCallback) sessionStorageCallback(html);
			if (routeCallback) routeCallback(fullRoute);
		})
		.catch((err) => {
			errorCallback(err);
		});
};

export default get;

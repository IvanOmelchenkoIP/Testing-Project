"use strict";

import BASE_ROUTE from "../../../data/routes/base-route.js"
import { FETCH_HEADERS, FETCH_METHODS } from "../data/fetch-data.js";
import { createHeaders } from "../headers/headers.js";

const getHtml = ({
	route,
	headers = null,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
}) => {
	const fullRoute = BASE_ROUTE + route;
	const baseHeaders = createHeaders(FETCH_HEADERS.acceptAll, FETCH_HEADERS.contentTypeAll);
	const reqHeaders = headers == null ? baseHeaders : createHeaders(...baseHeaders, ...headers);
	fetch(fullRoute, {
		method: FETCH_METHODS.get,
		headers: reqHeaders,
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
			if (errorCallback) errorCallback(err);
		});
};

export default getHtml;

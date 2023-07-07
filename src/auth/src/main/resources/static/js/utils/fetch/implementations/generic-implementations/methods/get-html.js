"use strict";

import FETCH_METHODS from "../../../data/methods/fetch-methods.js";

const getHtml = ({
	route,
	headers,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
}) => {
	console.log(htmlCallback);
	fetch(route, {
		method: FETCH_METHODS.get,
		headers: headers,
	})
		.then((response) => {
			return response.text();
		})
		.then((html) => {
			console.log(html);
			if (htmlCallback) htmlCallback(html);
			if (sessionStorageCallback) sessionStorageCallback(html);
			if (routeCallback) routeCallback(route);
		})
		.catch((err) => {
			if (errorCallback) errorCallback(err);
		});
};

export default getHtml;

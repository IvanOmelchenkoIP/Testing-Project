"use strict";

import BASE_ROUTE from "../../../data/routes/base-route.js"
import { FETCH_HEADERS, FETCH_METHODS, FETCH_ERRORS } from "../data/fetch-data.js";
import { createHeaders } from "../headers/headers.js";

const post = ({
	route,
	json = {},
	headers = null,
	resSuccessCallback = null,
	resErrorCallback = null,
	//pageErrorCallback = null,
	cookiesCallback = null,
	//sessionStorageCallback = null,
	//localStorageCallback = null
}) => {
	const fullRoute = BASE_ROUTE + route;
	if (headers == null) headers = createHeaders(FETCH_HEADERS.acceptJson, FETCH_HEADERS.contentTypeJson);
	fetch(fullRoute, {
		method: FETCH_METHODS.post,
		headers: headers,
		body: JSON.stringify(json),
	})
		.then(
			(response) => new Promise((resolve) =>
				response.json().then((json) => resolve({ ok: response.ok, json }))
			)
		)
		.then(({ ok, json }) => {
			const message = json.message;
			if (ok) {
				if (cookiesCallback) cookiesCallback(message);
				if (resSuccessCallback) resSuccessCallback(message);
			} else {
				if (resErrorCallback) resErrorCallback(FETCH_ERRORS[message]);
			}
		})
		.catch((err) => {
			//if (pageErrorCallback) pageErrorCallback(err);
			if (resErrorCallback) resErrorCallback(FETCH_ERRORS["response-error"]);
		});
};

export default post;

"use strict";

import FETCH_METHODS from "../../../data/methods/fetch-methods.js";

const post = ({
	route,
	headers,
	json = {},
	resSuccessCallback = null,
	resErrorCallback = null,
	//pageErrorCallback = null,
	cookiesCallback = null,
	//sessionStorageCallback = null,
	//localStorageCallback = null
}) => {
	fetch(route, {
		method: FETCH_METHODS.post,
		headers: headers,
		credentials: "same-origin",
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
				if (resErrorCallback) resErrorCallback(message);
			}
		})
		.catch((err) => {
			//if (pageErrorCallback) pageErrorCallback(err);
			if (resErrorCallback) resErrorCallback(err);
		});
};

export default post;

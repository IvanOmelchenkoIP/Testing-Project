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
		redirect: "follow"
	})
		.then((response) => {
			return response.text();
		})
		.then((pageText) => {
			document.documentElement.innerHTML = pageText;
			const oldScripts = document.getElementsByTagName("script");
			console.log(oldScripts);
			for (const oldScript of oldScripts) {
				const newScript = document.createElement("script");
				const attributes = oldScript.attributes;
				for (const attribute of attributes) newScript.setAttribute(attribute.name, attribute.value);
				newScript.appendChild(document.createTextNode(oldScript.innerHTML));
				oldScript.parentNode.replaceChild(newScript, oldScript);
				console.log(newScript);
			}
			
			console.log(document.documentElement.innerHTML);
			
			window.history.replaceState(null, null, fullRoute);
		});
};

export default get;

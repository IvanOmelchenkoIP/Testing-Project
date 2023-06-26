"use strict";

import { get } from "../methods/fetch-methods.js";
import { FETCH_HEADERS } from "../data/fetch-data.js"
import { createHeaders, addToHeader } from "../headers/headers.js";

const getJwt = ({
	route,
	jwtToken,
	successCallback = null,
	errorCallback = null
}) => {
	const jwtHeaders = createHeaders(
		FETCH_HEADERS.acceptAll,
		FETCH_HEADERS.contentTypeAll,
		addToHeader(FETCH_HEADERS.authorization, jwtToken)
	);
	get({
		route: route,
		headers: jwtHeaders,
		successCallback: successCallback,
		errorCallback: errorCallback
	});
};

export default getJwt;
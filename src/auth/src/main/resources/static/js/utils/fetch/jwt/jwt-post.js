"use strict";

import { post } from "../methods/fetch-methods.js";
import { FETCH_HEADERS } from "../data/fetch-data.js"
import { createHeaders, addToHeader } from "../headers/headers.js";

const postJwt = ({
	route,
	jwtToken,
	json = {},
	successCallback = null,
	errorCallback = null
}) => {
	const jwtHeaders = createHeaders(
		FETCH_HEADERS.acceptJson,
		FETCH_HEADERS.contentTypeJson,
		addToHeader(HEADERS.authorization, jwtToken)
	);
	post({
		route: route,
		json: json,
		headers: jwtHeaders,
		successCallback: successCallback,
		errorCallback: errorCallback
	});
};

export default postJwt;

"use strict";

import { getHtml as genericGetHtml } from "../../generic-implementations/methods/get-html.js";
import { FETCH_HEADERS } from "../data/fetch-data.js"
import { createHeaders, addToHeader } from "../headers/headers.js";

const getHtml = ({
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
	genericGetHtml({
		route: route,
		headers: jwtHeaders,
		successCallback: successCallback,
		errorCallback: errorCallback
	});
};

export default getHtml;

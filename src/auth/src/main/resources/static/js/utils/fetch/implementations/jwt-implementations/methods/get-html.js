"use strict";

import { getHtml as genericGetHtml } from "../../generic-implementations/methods/get-html.js";
import { FETCH_HEADERS } from "../data/fetch-data.js"
import { createHeaders, addToHeader } from "../headers/headers.js";

const getHtml = ({
	route,
	jwtToken,
	headers = null,
	htmlCallback = null,
	routeCallback = null,
	errorCallback = null,
	sessionStorageCallback = null,
	//localStorageCallback = null,
}) => {
	const jwtHeaders = addToHeader(FETCH_HEADERS.authorization, jwtToken);
	const reqHeaders = headers == null ? jwtHeaders : createHeaders(...jwtHeaders, ...headers);
	genericGetHtml({
		route: route,
		headers: reqHeaders,
		successCallback: successCallback,
		errorCallback: errorCallback
	});
};

export default getHtml;

"use strict";

import { post as genericPost } from "../../generic-implementations/methods/post.js";
import { FETCH_HEADERS } from "../data/fetch-data.js"
import { createHeaders, addToHeader } from "../headers/headers.js";

const post = ({
	route,
	jwtToken,
	json = {},
	successCallback = null,
	errorCallback = null
}) => {
	const jwtHeaders = createHeaders(
		FETCH_HEADERS.acceptJson,
		FETCH_HEADERS.contentTypeJson,
		addToHeader(FETCH_HEADERS.authorization, jwtToken)
	);
	genericPost({
		route: route,
		json: json,
		headers: jwtHeaders,
		successCallback: successCallback,
		errorCallback: errorCallback
	});
};

export default post;

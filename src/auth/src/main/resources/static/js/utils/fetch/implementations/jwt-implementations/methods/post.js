"use strict";

import { post as genericPost } from "../../generic-implementations/methods/post.js";
import headersProcessor from "../../../instances/headers-processor/headers-processor.js";

const post = ({
	route,
	headers,
	jwtToken,
	json = {},
	resSuccessCallback = null,
	resErrorCallback = null,
	//pageErrorCallback = null,
	cookiesCallback = null,
	//sessionStorageCallback = null,
	//localStorageCallback = null
}) => {
	const { Authorization } = headersProcessor.addToHeader(headers.Authorization, jwtToken);
	headers.Authorization = Authorization;
	genericPost({
		route: route,
		headers: headers,
		json: json,
		resSuccessCallback: resSuccessCallback,
		resErrorCallback: resErrorCallback,
		cookiesCallback: cookiesCallback
	});
};

export default post;

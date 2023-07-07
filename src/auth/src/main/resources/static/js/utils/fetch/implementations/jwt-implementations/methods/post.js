"use strict";

import post from "../../generic-implementations/methods/post.js";
import headersProcessor from "../../../instances/headers-processor/headers-processor.js";

const postJwt = ({
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
	post({
		route: route,
		headers: headers,
		json: json,
		resSuccessCallback: resSuccessCallback,
		resErrorCallback: resErrorCallback,
		cookiesCallback: cookiesCallback
	});
};

export default postJwt;

"use strict";

import GenericFetchUtil from "./generic-fetch-util.js";

class FetchUtil extends GenericFetchUtil {
	constructor(postImpl, getHtmlImpl) {
		this.postImpl = postImpl;
		this.getHtmlImpl = getHtmlImpl;
	}

	post({ route = "",
		headers = {},
		json = {},
		resSuccessCallback = null,
		resErrorCallback = null,
		//pageErrorCallback = null,
		cookiesCallback = null,
		//sessionStorageCallback = null,
		//localStorageCallback = null,
		...params
	}) {
		super.executeFetchImpl({
			fetchImpl: this.postImpl,
			route: route,
			headers: headers,
			json: json,
			resSuccessCallback: resSuccessCallback,
			resErrorCallback: resErrorCallback,
			cookiesCallback: cookiesCallback,
			...params
		});
	}

	getHtml({ route = "",
		headers = {},
		htmlCallback = null,
		routeCallback = null,
		errorCallback = null,
		sessionStorageCallback = null,
		//localStorageCallback = null,
		...params
	}) {
		super.executeFetchImpl({
			fetchImpl: this.getHtmlImpl,
			route: route,
			headers: headers,
			htmlCallback: htmlCallback,
			routeCallback: routeCallback,
			errorCallback: errorCallback,
			sessionStorageCallback: sessionStorageCallback,
			...params
		});
	}
}

export default FetchUtil;

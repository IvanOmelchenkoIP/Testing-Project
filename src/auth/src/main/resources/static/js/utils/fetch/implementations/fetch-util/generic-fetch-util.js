"use strict";

class GenericFetchUtil {
	constructor() {
		this.BASE_ROUTE = "";
		this.BASE_HEADERS = {};
	}

	config({ route = "", headers = {} }) {
		this.BASE_ROUTE = route;
		this.BASE_HEADERS = headers;
	}

	executeFetchImpl({ fetchImpl, route = "", headers = {}, ...args }) {
		const fullRoute = this.BASE_ROUTE + route;
		const allHeaders = createHeaders({ ...this.BASE_HEADERS, ...headers });
		fetchImpl({ route: fullRoute, headers: allHeaders, ...args });
	}
}

export default GenericFetchUtil;


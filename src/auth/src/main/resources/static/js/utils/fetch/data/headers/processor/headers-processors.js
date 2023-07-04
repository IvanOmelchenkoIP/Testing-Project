"use strict";

import FETCH_HEADERS from "../fetch-headers.js";

class HeadersProcessor {
	listHeaders() {
		return FETCH_HEADERS;
	}
	
	createHeaders(...headers) {
		const created = new Object();
		for (const header of headers) Object.assign(created, header);
		return created;
	}

	addToHeader(header, added) {
		const key = Object.keys(header)[0];
		const value = Object.values(header)[0] + added;
		return { [key]: value };
	};
}

export default HeadersProcessor;

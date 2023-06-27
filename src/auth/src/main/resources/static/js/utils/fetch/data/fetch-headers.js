"use strict";

const FETCH_HEADERS = {
	contentTypeJson: { "Content-Type": "application/json" },
	contentTypeAll: { "Content-Type": "*/*" },
	acceptJson: { Accept: "application/json" },
	acceptAll: { Accept: "*/*" },
	authorization: { Authorization: "Bearer " },
};

export default FETCH_HEADERS;

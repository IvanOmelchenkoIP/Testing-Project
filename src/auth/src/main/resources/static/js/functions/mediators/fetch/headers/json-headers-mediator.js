"use strict";

import headersProcessor from "../../../utils/fetch/instances/headers-processor/headers-processor.js";

const jsonHeadersMediator = () => {
	const allHeaders = headersProcessor.listHeaders();
	return headersProcessor.createHeaders(allHeaders.acceptJson, allHeaders.contentTypeJson);
}

export default jsonHeadersMediator;

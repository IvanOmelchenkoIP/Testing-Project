"use strict";

import headersProcessor from "../../../utils/fetch/instances/headers-processor/headers-processor.js";

const allHeadersMediator = () => {
	const allHeaders = headersProcessor.listHeaders();
	return headersProcessor.createHeaders(allHeaders.acceptAll, allHeaders.contentTypeAll);
}

export default allHeadersMediator;

"use strict";

import FetchUtil from "../../../fetch-util/fetch-util.js"
import * as fetchImpls from "../../../implementations/jwt-implementations/fetch-jwt.js";
import BASE_ROUTE from "../../../../../data/routes/base-route.js";
import headersProcessor from "../../headers-processor/headers-processor.js";

const allHeaders = headersProcessor.listHeaders();

const jwtFetchUtil = new FetchUtil(fetchImpls.post, fetchImpls.getHtml);
jwtFetchUtil.config({
	route: BASE_ROUTE,
	headers: headersProcessor.createHeaders(allHeaders.authorization)
});

export default jwtFetchUtil;

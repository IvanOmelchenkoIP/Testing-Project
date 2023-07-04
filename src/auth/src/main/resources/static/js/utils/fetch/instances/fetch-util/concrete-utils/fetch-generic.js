"use strict";

import FetchUtil from "../../../fetch-util/fetch-util.js"
import * as fetchImpls from "../../../implementations/generic-implementations/fetch-generic.js";
import BASE_ROUTE from "../../../../../data/routes/base-route.js";

const fetchUtil = new FetchUtil(fetchImpls.post, fetchImpls.getHtml);
fetchUtil.config({ route: BASE_ROUTE });

export default fetchUtil;

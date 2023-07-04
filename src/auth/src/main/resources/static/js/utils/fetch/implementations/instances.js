"use strict";

import FetchUtil from "./fetch-class.js";
import * as fetchGeneric from "./generic-implementations/fetch-generic.js";
import * as fetchJwt from "./jwt-implementations/fetch-jwt.js"

const fetchUtil = new FetchUtil(fetchGeneric.post, fetchGeneric.getHtml);
const fetchJwtUtil = new FetchUtil(fetchJwt.post, fetchJwt.getHtml);

export { fetchUtil, fetchJwtUtil };

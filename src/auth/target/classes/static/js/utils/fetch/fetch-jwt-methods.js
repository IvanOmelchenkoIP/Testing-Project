"use strict";

import { HEADERS } from "./fetch-const-data.js";
import { post, get } from "./fetch-methods.js";
import deepCopy from "../deep-copy.js";

const json = deepCopy(HEADERS.json);
const jwt = deepCopy(HEADERS.jwt);
const DEFAULT_JWT_HEADER = Object.assign(json, jwt);

const postJwt = (route, json = {}, headers = DEFAULT_JWT_HEADER.json) => {
  return post(route, json, headers);
};

const getJwt = (route, json = {}, headers = DEFAULT_JWT_HEADER.json) => {
  return get(route, json, headers);
};

export { postJwt, getJwt };

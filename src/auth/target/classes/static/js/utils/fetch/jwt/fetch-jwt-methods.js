"use strict";

import { post, get } from "../fetch-methods.js";

const postJwt = ({route, json = {}, headers = DEFAULT_JWT_HEADER.json}) => {
  return post(route, json, headers);
};

const getJwt = ({route, json = {}, headers = DEFAULT_JWT_HEADER.json}) => {
  return get(route, json, headers);
};

export { postJwt, getJwt };

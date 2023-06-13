"use strict";

import { HEADERS } from "../fetch-consts.js";
import deepCopy from "../../utils/deep-copy.js";

const createJwtHeader = (token) => {
  const headers = Object.assign(new Object(), HEADERS.json);
  const jwt = deepCopy(HEADERS.jwt) + token;
  return Object.assign(headers, jwt);
};

export default createJwtHeader;

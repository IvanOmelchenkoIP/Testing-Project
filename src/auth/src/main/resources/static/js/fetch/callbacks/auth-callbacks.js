"use strict";

import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { FETCH_ERRORS } from "../fetch-consts.js";
import { getJwt } from "../jwt/jwt-fetch-methods.js";

const successCallback = (token) => {
  const REDIRECT_ROUTE = "/user";
  console.log("here " + token);
  getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

const errorCallback = (errId) => {
  const errField = "error-field";
  parseDomData(DOM_DATA_GETTERS.id, errField)[errField].innerHtml = FETCH_ERRORS[errId];
}

export { successCallback, errorCallback };
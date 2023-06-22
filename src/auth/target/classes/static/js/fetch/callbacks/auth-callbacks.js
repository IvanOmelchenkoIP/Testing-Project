"use strict";

import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { getJwt } from "../jwt/jwt-fetch-methods.js";

const successCallback = (token) => {
  const REDIRECT_ROUTE = "/user";
  getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

const errorCallback = (error) => {
  const id = "error-field";
  DOM_DATA_GETTERS.id(id).innerText = error;
}

export { successCallback, errorCallback };
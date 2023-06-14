"use strict";

//import { DOM_DATA_GETTERS, parseDomData } from "../../utils/dom-parser.js";
import { FETCH_ERRORS } from "../fetch-consts.js";
import { getJwt } from "../jwt/jwt-fetch-methods.js";

const successCallback = (token) => {
  const REDIRECT_ROUTE = "/user";
  getJwt({ route: REDIRECT_ROUTE, jwtToken: token });
}

const errorCallback = (errId) => {
	console.log(errId);
  const errField = "error-field";
  document.getElementById(errField).innerHtml = FETCH_ERRORS[errId];
}

export { successCallback, errorCallback };
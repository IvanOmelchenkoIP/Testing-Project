"use strict";

import { post } from "../methods/fetch-methods.js";
import { HEADERS } from "../fetch-consts.js"
import { createHeaders, addToHeader } from "../headers.js";

const postJwt = ({ 
	route, 
	jwtToken, 
	json = {}, 
	successCallback = null, 
	errorCallback = null 
  }) => {
  const jwtHeaders = createHeaders(
	HEADERS.acceptJson, 
    HEADERS.contentTypeJson, 
    addToHeader(HEADERS.authorization, jwtToken)
  );
  post({ 
	route: route, 
	json: json, 
	headers: jwtHeaders, 
	successCallback: successCallback, 
	errorCallback: errorCallback 
  });
};

export default postJwt;

"use strict";

import { get } from "../methods/fetch-methods.js";
import { HEADERS } from "../fetch-consts.js"
import { createHeaders, addToHeader } from "../headers.js";

const getJwt = ({
	route, 
	jwtToken, 
	successCallback = null, 
	errorCallback = null
  }) => {
  const jwtHeaders = createHeaders(
	HEADERS.acceptAll, 
    HEADERS.contentTypeAll, 
    addToHeader(HEADERS.authorization, jwtToken)
  );
  get({ 
	route: route, 
	headers: jwtHeaders, 
	successCallback: successCallback, 
	errorCallback: errorCallback 
  });
};

export default getJwt;
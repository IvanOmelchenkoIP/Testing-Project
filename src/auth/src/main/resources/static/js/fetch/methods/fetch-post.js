"use strict";

import { HEADERS, METHODS, BASE_ROUTE, FETCH_ERRORS } from "../fetch-consts.js";
import { createHeaders } from "../headers.js";

const post = ({  
	route, 
	json = {}, 
	headers = null, 
	successCallback = null, 
	errorCallback = null
  }) => {
  const fullRoute = BASE_ROUTE + route;
  if (headers == null) headers = createHeaders(HEADERS.acceptJson, HEADERS.contentTypeJson);
  fetch(fullRoute, {
    method: METHODS.post,
    headers: headers,
    body: JSON.stringify(json),
  })
    .then(
      (response) =>
        new Promise((resolve) =>
          response.json().then((json) => resolve({ ok: response.ok, json }))
        )
    )
    .then(({ ok, json }) => {
      const message = json.message;
      if (ok) {
		if (successCallback) successCallback(message);
      } else {
		if (errorCallback) errorCallback(FETCH_ERRORS[message]);
      }
    })
    .catch((err) => {
	  const messageId = "response-error";
	  if (errorCallback) errorCallback(FETCH_ERRORS[messageId]);
	});
};

export default post;

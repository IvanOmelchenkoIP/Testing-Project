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
		console.log("ok - " + message);
		if (successCallback) successCallback(message);
      } else {
		console.log("no - " + message);
		if (errorCallback) errorCallback(FETCH_ERRORS[message]);
      }
    })
    .catch((err) => {
	  console.log("err - " + err);
	  if (errorCallback) errorCallback(FETCH_ERRORS["response-error"]);
	});
};

export default post;

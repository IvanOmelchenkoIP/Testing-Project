"use strict";

import { BASE_ROUTE, HEADERS, METHODS } from "../fetch-consts.js";

const get = ({
  route,
  headers = null,
  successCallback = null,
  errorCallback = null,
}) => {
  const fullRoute = BASE_ROUTE + route;
  if (headers == null) {
    headers = createHeaders(HEADERS.acceptAll, HEADERS.contentTypeAll);
  }
  fetch(fullRoute, {
    method: METHODS.get,
    headers: headers,
  })
    .then((response) => {
      return response.text();
    })
    .then((pageText) => {
      window.history.pushState(null, null, fullRoute);
      document.body.innerHTML = pageText;
    });
};

export default get;

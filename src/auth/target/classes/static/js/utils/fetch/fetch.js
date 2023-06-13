"use strict";

import { HEADERS, BASE_ROUTE } from "./fetch-consts";

const fetchData = async (method, route, json = {}, headers = HEADERS.json) => {
  const fullRoute = BASE_ROUTE + route;
  const fetchResponse = fetch(fullRoute, {
    method: method,
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
        return message;
      } else {
        return false;
      }
    })
    .catch((err) => console.log(1));
  return await fetchResponse;
};

export default fetchData;

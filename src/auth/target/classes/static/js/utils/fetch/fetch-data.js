"use strict";

import { BASE_ROUTE, HEADERS } from "./fetch-const-data.js";

const fetchData = async (method, route, json = {}, headers = HEADERS.json) => {
  const fullRoute = BASE_ROUTE + route;
  console.log('here');
  try {
    const response = await fetch(fullRoute, {
      method: method,
      headers: headers,
      body: JSON.stringify(json),
    });
    console.log("res - raw - " + response);
    console.log("res - " + response.json());
    return response.json();
  } catch (err) {
    throw err;
  }
};

export default fetchData;

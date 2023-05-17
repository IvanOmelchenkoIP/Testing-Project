"use strict";

const BASE_ROUTE = "http://localhost:8080";

const HEADERS = {
  json: { Accept: "application/json", "Content-Type": "application/json" },
};

const fetchData = async (method, route, json = {}, headers = HEADERS.json) => {
  const fullRoute = BASE_ROUTE + route;
  try {
    const response = await fetch(fullRoute, {
      method: method,
      headers: headers,
      body: JSON.stringify(json),
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

export default fetchData;

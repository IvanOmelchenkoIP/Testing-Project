"use strict";

const BASE_ROUTE = "http://localhost:8080";

const HEADERS = {
  json: { Accept: "application/json", "Content-Type": "application/json" },
};

const fetchData = async (method, route, json = {}, headers = HEADERS.json) => {
  const fullRoute = BASE_ROUTE + route;
  /*try {
    const response = await fetch(fullRoute, {
      method: method,
      headers: headers,
      body: JSON.stringify(json),
    });
    if (!response.ok) {
      console.log('not ok');
      throw new Error('Error in response');
    }
    const resJson = await response.json();
    return await resJson.message;
  } catch (err) {
    throw err;
  }*/
  fetch(fullRoute, {
    method: method,
    headers: headers,
    body: JSON.stringify(json),
  }).then(response => response.json()).then(data => console.log(data.message));
  return null;
};

export default fetchData;

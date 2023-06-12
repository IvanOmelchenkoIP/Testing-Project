"use strict";

const BASE_ROUTE = "http://localhost:8080";

const METHODS = { post: "POST", get: "GET" };

const HEADERS = {
  json: { Accept: "application/json", "Content-Type": "application/json" },
  jwt: { Authentication: "Bearer " },
};

export { BASE_ROUTE, METHODS, HEADERS };

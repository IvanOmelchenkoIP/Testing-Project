"use strict";

const BASE_ROUTE = "http://localhost:8080";

const METHODS = { post: "POST", get: "GET" };

const HEADERS = {
  json: { Accept: "application/json", "Content-Type": "application/json" },
  jwt: { Authentication: "Bearer " },
};

const FETCH_ERRORS = {
  "regsponse-error": "There was a problem with receiving response from server",
  "already-exists": "Username is already taken or email is already in use",
  "illegal-field": "There was a problem with data you sent to the server",
};

export { BASE_ROUTE, METHODS, HEADERS, FETCH_ERRORS };

"use strict";

const BASE_ROUTE = "http://localhost:8080";

const METHODS = { post: "POST", get: "GET" };

const HEADERS = {
  contentTypeJson: { "Content-Type": "application/json" },
  contentTypeAll: { "Content-Type": "*/*" },
  acceptJson: { Accept: "application/json" },
  acceptAll: { Accept: "*/*" },
  authorization: { Authorization: "Bearer " },
};

const FETCH_ERRORS = {
  "response-error": "There was a problem with receiving response from server",
  "already-exists": "Username is already taken or email is already in use",
  "illegal-field": "There was a problem with data you sent to the server",
  "login-error": "Incorrect username or password when logging in"
};

export { BASE_ROUTE, METHODS, HEADERS, FETCH_ERRORS };

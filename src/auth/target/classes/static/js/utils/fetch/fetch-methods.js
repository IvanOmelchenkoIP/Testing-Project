"use strict";

import { HEADERS, METHODS } from "./fetch-consts.js";
import fetchData from "./fetch.js";

const post = (route, json = {}, headers = HEADERS.json) => {
  try {
    const response = fetchData(METHODS.post, route, json, headers);
    return response;
  } catch (err) {
    throw err;
  }
};

const get = async (route, json = {}, headers = HEADERS.json) => {
  try {
    const response = await fetchData(METHODS.get, route, json, headers);
    return response;
  } catch (err) {
    throw err;
  }
};

export { post, get };

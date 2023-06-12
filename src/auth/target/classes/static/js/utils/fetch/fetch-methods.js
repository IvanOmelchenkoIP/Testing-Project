import { HEADERS, METHODS } from "./fetch-const-data.js";
import fetchData from "../fetch-data.js";

const post = (route, json = {}, headers = HEADERS.json) => {
  try {
    const response = fetchData(METHODS.post, route, json, headers);
    return response
  } catch (err) {
    throw err;
  }
};

const get = (route, json = {}, headers = HEADERS.json) => {
  try {
    const response = fetchData(METHODS.get, route, json, headers);
    return response;
  } catch (err) {
    throw err;
  }
};

export { post, get };

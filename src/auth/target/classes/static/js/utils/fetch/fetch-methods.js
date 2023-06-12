import { HEADERS, METHODS } from "./fetch-const-data.js";

const post = async (route, json = {}, headers = HEADERS.json) => {
  return await fetch(METHODS.post, route, json, headers);
};

const get = async (route, json = {}, headers = HEADERS.json) => {
  return await fetch(METHODS.get, route, json, headers);
};

export { post, get };

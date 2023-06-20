"use strict";

const createHeaders = (...headers) => {
  const created = new Object();
  for (const header of headers) Object.assign(created, header);
  return created;
};

const addToHeader = (header, added) => {
  const key = Object.keys(header)[0];
  const value = Object.values(header)[0] + added;
  return { [key]: value };
};

export { createHeaders, addToHeader };
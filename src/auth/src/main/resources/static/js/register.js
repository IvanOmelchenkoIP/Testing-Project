"use strict";

const RESIGSTRATION_FORMS = {
  username: "username",
  email: "email",
  passwd: "passwd",
};

const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const METHODS = {
  POST: "POST",
};

const fetchJson = async (method, json = null, route = window.location.href) => {
  try {
    const response = await fetch(route, {
      method: method,
      headers: jsonHeaders,
      body: JSON.stringify(json),
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

const getFormContentsByName = (name) =>
  document.getElementsByName(name)[0].value;

const getUserData = () => {
  const username = getFormContentsByName(RESIGSTRATION_FORMS.username);
  const email = getFormContentsByName(RESIGSTRATION_FORMS.email);
  const passwd = getFormContentsByName(RESIGSTRATION_FORMS.passwd);
  return { username, email, passwd };
};

const registerUser = () => {
  const userData = getUserData();
  try {
    const response = fetchJson(
      METHODS.POST,
      userData,
      "http://localhost:8080/register"
    );
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

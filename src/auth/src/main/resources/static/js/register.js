"use strict";

const RESIGSTRATION_FORMS = {
  username: "username",
  email: "email",
  passwd: "passwd",
};

const getFormContentsByName = (name) =>
  document.getElementsByName(name)[0].value;

const postRequest = async (route, json) => {
  await fetch(route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  }).then(response => console.log(response.json()))
    .catch(console.error);
};

const registerUser = async () => {
  const username = getFormContentsByName(RESIGSTRATION_FORMS.username);
  const email = getFormContentsByName(RESIGSTRATION_FORMS.email);
  const passwd = getFormContentsByName(RESIGSTRATION_FORMS.passwd);
  await postRequest("http://localhost:8080/register", {
    username: username,
    email: email,
    passwd: passwd,
  });
};
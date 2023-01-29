"use strict";

const RESIGSTRATION_FORMS = {
  username: "username",
  email: "email",
  passwd: "passwd",
};

const getFormContentsByName = (name) => document.getElementsByName(name)[0].value;

const registerUser = () => {
  const username = getFormContentsByName(RESIGSTRATION_FORMS.username);
  const email = getFormContentsByName(RESIGSTRATION_FORMS.email);
  const passwd = getFormContentsByName(RESIGSTRATION_FORMS.passwd);
};

"use strict";

const VALIDATOR_EXPRESSIONS = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  username: /^[A-Za-z][A-Za-z0-9_]{2,64}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
  empty: /\A\s*\z/,
}

const validate = (str, validator) => {
  if (str == null) return false;
  return validator.test(String(str));
}

export { VALIDATOR_EXPRESSIONS, validate };
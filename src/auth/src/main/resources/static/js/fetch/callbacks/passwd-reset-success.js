"use strict";

import get from "../methods/fetch-get.js";
import ROUTES from "../../data/routes.js";

const passwdResetSuccess = () => {
  const REDIRECT_ROUTE = ROUTES.login;
  get({ route: REDIRECT_ROUTE });
}

export default passwdResetSuccess;
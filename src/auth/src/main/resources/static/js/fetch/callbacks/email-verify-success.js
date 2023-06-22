"use strict";

import get from "../methods/fetch-get.js";
import ROUTES from "../../data/routes.js";

const emailVerifySuccess = () => {
  const REDIRECT_ROUTE = ROUTES.resetPassword;
  get({ route: REDIRECT_ROUTE });
}

export default emailVerifySuccess;
"use strict";

import ROUTES from "../../data/routes/routes.js";

import RegisterService from "./implementations/register-service.js";
import LoginService from "./implementations/login-service.js";
import LogoutService from "./implementations/logout-service.js";
import UserAuthService from "./user-auth-service-class.js";

const userAuthService = new UserAuthService(
	RegisterService.withRoute(ROUTES.register),
	LoginService.withRoute(ROUTES.login),
	LogoutService.withRoute(ROUTES.logout),
);

export default userAuthService;
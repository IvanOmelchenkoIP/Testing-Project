"use strict";

import ROUTES from "../../../data/routes/routes.js";
import * as authServiceImpls from "../../implementations/service-implementations/user-services/auth-services/auth-services.js";
import AuthService from "../../implementations/service-classes/user-services/auth-service.js";

const userAuthService = new AuthService(
	authServiceImpls.RegisterService.withRoute(ROUTES.register),
	authServiceImpls.LoginService.withRoute(ROUTES.login),
	authServiceImpls.LogoutService.withRoute(ROUTES.logout),
);

export default userAuthService;

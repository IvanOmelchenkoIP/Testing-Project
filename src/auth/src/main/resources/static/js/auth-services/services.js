"use strict";

import ROUTES from "../data/routes.js"

import RegisterService from "./services/register-service.js";
import LoginService from "./services/login-service.js";
import LogoutService from "./services/logout-service.js";
import UserAuthService from "./user-service/user-service.js";

import EmailVerifyService from "./services/email-verify-service.js"
import PasswordResetService from "./services/passwd-reset-service.js"
import ResetService from "./user-service/reset-service.js";

const userService = new UserAuthService(
  RegisterService.withRoute(ROUTES.register),
  LoginService.withRoute(ROUTES.login),
  LogoutService.withRoute(ROUTES.logout),
);

const resetService = new ResetService(
	EmailVerifyService.withRoute(ROUTES.emailVerify),
	PasswordResetService.withRoute(ROUTES.resetPassword),
);

export { userService, resetService };

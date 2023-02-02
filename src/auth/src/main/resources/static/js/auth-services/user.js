"use strict";

import RegisterService from "./services/register-service.js";
import LoginService from "./services/login-service.js";
import LogoutService from "./services/logout-service.js";
import UserAuthService from "./user-service/user-service.js";

const ROUTES = {
  register: "/register",
  login: "/login",
  logout: "/logout",
};

const userService = new UserAuthService(
  RegisterService.withRoute(ROUTES.register),
  LoginService.withRoute(ROUTES.login),
  LogoutService.withRoute(ROUTES.logout)
);

export default userService;

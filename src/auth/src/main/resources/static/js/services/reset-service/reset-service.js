"use strict";

import ROUTES from "../../data/routes/routes.js";

import EmailVerifyService from "./implementations/email-verify-service.js"
import PasswordResetService from "./implementations/passwd-reset-service.js"
import ResetService from "./reset-service-class.js";

const resetService = new ResetService(
	EmailVerifyService.withRoute(ROUTES.emailVerify),
	PasswordResetService.withRoute(ROUTES.resetPassword),
);

export default resetService;

"use strict";

import ROUTES from "../../../data/routes/routes.js";
import * as resetServicesImpls from "../../implementations/service-implementations/user-services/reset-services/reset-services.js";
import ResetService from "../../implementations/service-classes/user-services/reset-service.js";

const resetService = new ResetService(
	resetServicesImpls.EmailVerifyService.withRoute(ROUTES.emailVerify),
	resetServicesImpls.PasswordResetService.withRoute(ROUTES.resetPassword),
);

export default resetService;

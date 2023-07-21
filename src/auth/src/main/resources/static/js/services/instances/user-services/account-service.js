"use strict";

import ROUTES from "../../../data/routes/routes.js";
import * as accountServicesImpls from "../../implementations/service-implementations/user-services/account-services/account-services.js";
import AccountService from "../../implementations/service-classes/user-services/account-service.js";

const accountService = new AccountService(
	accountServicesImpls.EmailVerifyService.withRoute(ROUTES.emailVerify),
	accountServicesImpls.PasswordResetService.withRoute(ROUTES.resetPassword),
);

export default accountService;

"use server";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { cookies } from "next/headers";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { authenticator_ServerActionResponsePreHandler } from "../server-actions-utils/authenticator-server-action-response-pre-handler";
import { cookieOptionsForJustSettingIsLoggedData } from "./cookie-option";

export async function LogOutAccount_ServerAction(): ServerActionResponseWithPromise {
    const _cookies = await cookies();
    const userSession = authenticator_ServerActionResponsePreHandler(await sessionAuthenticator_S_A());
    if (userSession.errors || !userSession.auth) {
        return userSession.errors;
    }
    const res = await mainUserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/authentication/logout`,
        method: "DELETE",
        ip: userSession.auth.ip,
        agent: userSession.auth.agent,
        session_token: userSession.auth.data.session.token,
    });
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            _cookies.delete(userServiceConfig.session_token_name);
            if (_cookies.has(userServiceConfig.r6_current_username)) {
                _cookies.delete(userServiceConfig.r6_current_username);
            }
            _cookies.set(cookieOptionsForJustSettingIsLoggedData("0"));
        },
    });
}

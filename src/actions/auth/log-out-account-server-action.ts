"use server";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { cookies } from "next/headers";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { authenticator_ServerActionResponsePreHandler } from "../server-actions-utils/authenticator-server-action-response-pre-handler";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.js";

export async function LogOutAccount_ServerAction(): ServerActionResponseWithPromise {
    const _cookies = await cookies();
    const userSession = authenticator_ServerActionResponsePreHandler(await sessionAuthenticator_S_A());
    if (userSession.errors || !userSession.auth) {
        return userSession.errors;
    }
    const res = await mainUserServiceFetcher<ResponseTypesFor_Media_Section["delete_avatar"]>(
        `/v1/authentication/logout`,
        "DELETE",
    );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            _cookies.delete(userServiceConfig.session_token_name);
        },
    });
}

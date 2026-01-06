"use server";
import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { cookies } from "next/headers";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.js";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function LogOutAccount_ServerAction(): ServerActionResponseWithPromise {
    const _cookies = await cookies();
    const res = await userServiceRequest<ResponseTypesForAuthentication["logout"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.logout,
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            _cookies.delete(SESSION_TOKEN_NAME);
        },
    });
}

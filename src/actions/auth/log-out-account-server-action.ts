"use server";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { cookies } from "next/headers";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import type { ResponseTypesForAuthentication } from "#user-service/user-service-response-types-for-all.routes.js";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function LogOutAccount_ServerAction(): ServerActionResponseWithPromise {
    const _cookies = await cookies();
    const res = await fetchTheUserService<ResponseTypesForAuthentication["logout"]>(
        endpointsConfig.authentication.baseUrl + endpointsConfig.authentication.logout,
        "DELETE",
    );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            _cookies.delete(userServiceConfig.session_token_name);
        },
    });
}

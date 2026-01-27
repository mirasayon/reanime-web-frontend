"use server";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies } from "next/headers";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { SESSION_TOKEN_NAME } from "#/configs/user-service-config";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";

/** delete account */
export async function deleteAccountServerAction(): ServerActionResponseWithPromise {
    const res = await userServiceRequest<ResponseTypesFor_Account_Section["delete_account"]>(
        endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.deleteAccount,
        "DELETE",
    );
    const _cookies = await cookies();
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            _cookies.delete(SESSION_TOKEN_NAME);
        },
    });
}

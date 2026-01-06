"use server";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

export async function updateNickname_ServerAction({
    newNickname,
}: {
    newNickname: string;
}): ServerActionResponseWithPromise {
    const url = endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.updateNickname(newNickname);
    const res = await userServiceRequest<ResponseTypesFor_UserProfile_Section["update_nickname"]>(url, "PATCH");
    return userServiceResponseHandler(res);
}

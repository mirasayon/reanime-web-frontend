"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";

export async function updateNickname_ServerAction({
    newNickname,
}: {
    newNickname: string;
}): ServerActionResponseWithPromise {
    const url = endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.updateNickname(newNickname);
    const res = await fetchTheUserService<ResponseTypesFor_UserProfile_Section["update_nickname"]>(url, "PATCH");
    if (!res || res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.data && res.ok) {
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors || ["default"], ok: false };
}

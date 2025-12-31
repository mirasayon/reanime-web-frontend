"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { cookies } from "next/headers";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { userServiceConfig } from "#/configs/user-service.app-config";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

/** `Server Action` for Deleting account */
export async function DeleteAccountPermanently_ServerAction(): ServerActionResponseWithPromise {
    const _cookies = await cookies();
    const res = await fetchTheUserService<ResponseTypesFor_Account_Section["delete_account"]>(
        endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.deleteAccount,
        "DELETE",
    );

    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length || !res.ok) {
        return { errors: res.errors || [], ok: false };
    }
    if (res.data) {
        _cookies.delete(userServiceConfig.session_token_name);
        return { ok: true, msg: res.message };
    }
    return { ok: false, errors: [internalErrTxt] };
}

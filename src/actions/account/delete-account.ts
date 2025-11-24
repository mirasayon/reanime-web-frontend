"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import {
    sessionAuthenticator_S_A,
    type AuthenticatorType,
} from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { cookies } from "next/headers";
import { cookieOptionsForDELETEToken } from "../auth/cookie-option";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";

/** `Server Action` for Deleting account */
export async function DeleteAccountPermanently_ServerAction(): ServerActionResponseWithPromise {
    const auth: AuthenticatorType | null = await sessionAuthenticator_S_A();
    if (!auth) {
        return { ok: false, errors: [notLoggedErrorTxt] };
    }
    if (!auth || auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    const _cookies = await cookies();
    const res =
        await mainUserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
            url: `/v1/account/delete_account`,
            method: "DELETE",
            agent: auth.agent,
            ip: auth.ip,
            session_token: auth.data.session.token,
        });

    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.errors.length || !res.ok) {
        return { errors: res.errors || [], ok: false };
    }
    if (res.data) {
        _cookies.delete(cookieOptionsForDELETEToken.name);
        return { ok: true, msg: res.message };
    }
    return { ok: false, errors: [internalErrTxt] };
}

"use server";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";

export async function updateNickname_ServerAction({
    newNickname,
}: {
    newNickname: string;
}): ServerActionResponseWithPromise {
    const url = `/v1/profile/update/nickname/to/${newNickname}`;
    const auth = await sessionAuthenticator_S_A();
    if (!auth) {
        return { errors: [notLoggedErrorTxt], ok: false };
    }
    if (auth === 500) {
        return { errors: [internalErrTxt], ok: false };
    }

    const res =
        await mainUserServiceFetcher<Profile_ResponseTypes.update_nickname>({
            url: url,
            method: "PATCH",
            ip: auth.ip,
            agent: auth.agent,
            session_token: auth.data.session.token,
        });

    if (!res || res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.data && res.ok) {
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors || ["default"], ok: false };
}

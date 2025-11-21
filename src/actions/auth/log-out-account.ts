"use server";
import { UserService } from "#/configs/user-service.app-config";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { cookies } from "next/headers";

export async function LogOutAccount(): Promise<ServerActionResponse> {
    const _cookies = await cookies();
    const auth = await sessionAuthenticator_S_A();
    if (!auth) {
        return { errors: ["Вы не авторизованы"], ok: false };
    }
    if (auth === 500) {
        return { errors: [internalErrTxt], ok: false };
    }

    const res = await mainUserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/authentication/logout`,
        method: "DELETE",
        ip: auth.ip,
        agent: auth.agent,
        session_token: auth.data.session.token,
    });

    if (!res || res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.errors.length) {
        return { errors: res.errors, ok: false };
    }

    if (res.data) {
        _cookies.delete(UserService.session_token_name);
        return { msg: res.message, ok: true };
    }
    _cookies.delete(UserService.session_token_name);
    return { errors: [], ok: false };
}

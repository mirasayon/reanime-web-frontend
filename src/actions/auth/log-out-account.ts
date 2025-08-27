"use server";

import { UserService } from "#/configs/user-service.app-config";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther.integrator";
import { UserServiceFetcher } from "#/integrators/user_service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { cookies, headers } from "next/headers";

type LogOutAccountRT = Promise<{ errors: string[]; ok: boolean }>;

export async function LogOutAccount(): LogOutAccountRT {
    const _cookies = await cookies();
    const auth = await getSessionFromClient({ cookies: _cookies, headers: await headers() });
    if (!auth) {
        return { errors: ["Вы не авторизованы"], ok: false };
    }

    const res = await UserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/authentication/logout`,
        method: "DELETE",
        ip: auth.ip,
        agent: auth.agent,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
        return { errors: res.errors, ok: false };
    }

    if (res.data) {
        _cookies.delete(UserService.session_token_name);
        return { errors: [], ok: true };
    }
    _cookies.delete(UserService.session_token_name);
    return { errors: [], ok: false };
}


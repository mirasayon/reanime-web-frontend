"use server";

import { UserService } from "#/configs/user-service";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { cookies, headers } from "next/headers";
import { Profile_ResponseTypes } from "@reanime.art/user-service/user-service/response/response-data-types.js";

type LogOutAccountRT = Promise<{ errors: string[]; ok: boolean }>;

export async function LogOutAccount(): LogOutAccountRT {
    const auth = await getSessionFromClient({ cookies: await cookies(), headers: await headers() });
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
        (await cookies()).delete(UserService.session_token_name);
        return { errors: [], ok: true };
    }
    return { errors: [], ok: false };
}

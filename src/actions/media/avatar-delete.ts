"use server";
import { sessionAuthenticator } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { UserServiceResponseStatusCodes } from "&us/constants/response.constants";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { cookies, headers } from "next/headers";

type UploadImageRT = Promise<{
    errors: string[];
    ok: boolean;
}>;
/** `Server Action`
 *
 * Deleted A user avatar */
export async function DeleteAvatar(): UploadImageRT {
    const _cookies = await cookies();
    const _headers = await headers();
    const auth = await sessionAuthenticator({
        cookies: _cookies,
        headers: _headers,
    });
    if (!auth) {
        return {
            errors: ["Вы не авторизованы"],
            ok: false,
        };
    }
    const res = await UserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/profile/avatar/delete`,
        method: "DELETE",
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
        console.log("avatar delete message: ", res.message);
        return { errors: res.errors, ok: false };
    }
    if (res.data) {
        return { ok: true, errors: [] };
    }
    if (res.status_code === UserServiceResponseStatusCodes.TOO_MANY_REQUESTS) {
        return {
            errors: ["Слишком много запросов. Попробуйте позже"],
            ok: false,
        };
    }
    return {
        errors: ["Что-то пошло не так"],
        ok: false,
    };
}

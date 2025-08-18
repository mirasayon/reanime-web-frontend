"use server";

import { UserService } from "#/configs/user-service.app-config";
import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
import { UserServiceFetcher } from "#/integrators/user_service/fetcher";
import { cookies, headers } from "next/headers";
import { UserServiceResponseStatusCodes } from "@reanime.art/user-service/response/constants.js";
import { Profile_ResponseTypes } from "@reanime.art/user-service/types/responses/routes/profile.js";

type UploadImageRT = Promise<{
    errors: string[];
    ok: boolean;
}>;
/** `Server Action`
 *
 * Deleted A user avatar */
export async function DeleteAvatar(): UploadImageRT {
    const _cookies = await cookies();
    const auth = await getSessionFromClient({ cookies: _cookies, headers: await headers() });
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

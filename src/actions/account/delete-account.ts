"use server";
import { getSessionFromClient } from "#/integration/user-service/auth/cookie-auther.integrator";
import { UserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { UserServiceResponseStatusCodes } from "&us/constants/response.constants";
import type { Profile_ResponseTypes } from "&us/response-patterns/profile.routes";
import { cookies, headers } from "next/headers";

type DeleteAccountPermanently_ServerActionRT = Promise<{
    errors: string[];
    ok: boolean;
}>;
/** `Server Action`
 *
 * Deletes account */
export async function DeleteAccountPermanently_ServerAction(): DeleteAccountPermanently_ServerActionRT {
    const _cookies = await cookies();
    const auth = await getSessionFromClient();
    if (!auth) {
        return {
            errors: ["Вы не авторизованы"],
            ok: false,
        };
    }
    const res = await UserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/account/delete_account`,
        method: "DELETE",
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });

    if (res.errors.length) {
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

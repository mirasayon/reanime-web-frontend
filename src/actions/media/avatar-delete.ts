"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
type UploadImageRT = Promise<{
    errors: string[];
    ok: boolean;
}>;
/** `Server Action`
 *
 * Deleted A user avatar */
export async function DeleteAvatar(): UploadImageRT {
    const auth = await sessionAuthenticator_S_A();

    if (!auth || auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (!auth) {
        return {
            errors: ["Вы не авторизованы"],
            ok: false,
        };
    }
    const res = await mainUserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
        url: `/v1/profile/avatar/delete`,
        method: "DELETE",
        agent: auth.agent,
        ip: auth.ip,
        session_token: auth.data.session.token,
    });
    if (!res || res === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (res.data ?? res.ok) {
        return { ok: true, errors: [] };
    }
    return { errors: res?.errors || [internalErrTxt], ok: false };
}

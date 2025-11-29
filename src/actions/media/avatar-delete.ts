"use server";
import { notLoggedErrorTxt } from "#/constants/frequent-errors-from-client";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Profile_ResponseTypes } from "#user-service/shared/response-patterns/profile.routes.js";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";

/** `Server Action`
 *
 * Deleted A user avatar */
export async function DeleteAvatar_ServerAction(): ServerActionResponseWithPromise {
    const auth = await sessionAuthenticator_S_A();

    if (!auth || auth === 500) {
        return { ok: false, errors: [internalErrTxt] };
    }
    if (!auth) {
        return {
            errors: [notLoggedErrorTxt],
            ok: false,
        };
    }
    const res =
        await mainUserServiceFetcher<Profile_ResponseTypes.delete_avatar>({
            url: `/v1/profile/avatar/delete`,
            method: "DELETE",
            agent: auth.agent,
            ip: auth.ip,
            session_token: auth.data.session.token,
        });
    return await userServiceRawResponsePreHandler(res, {});
}

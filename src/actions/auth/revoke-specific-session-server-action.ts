"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { authenticator_ServerActionResponsePreHandler } from "../server-actions-utils/authenticator-server-action-response-pre-handler";
import type { Account_ResponseTypes } from "#user-service/shared/response-patterns/account.routes.js";
import { revalidatePath } from "next/cache";

export async function revokeSpecificSession_ServerAction(
    session_id: string,
): ServerActionResponseWithPromise {
    const userSession = authenticator_ServerActionResponsePreHandler(
        await sessionAuthenticator_S_A(),
    );
    if (userSession.errors || !userSession.auth) {
        return userSession.errors;
    }
    const res =
        await mainUserServiceFetcher<Account_ResponseTypes.terminate_specific_session>(
            {
                url: `/v1/account/sessions/terminate_specific_session/${session_id}`,
                method: "DELETE",
                ip: userSession.auth.ip,
                agent: userSession.auth.agent,
                session_token: userSession.auth.session_token,
            },
        );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/user/settings/sessions");
        },
    });
}

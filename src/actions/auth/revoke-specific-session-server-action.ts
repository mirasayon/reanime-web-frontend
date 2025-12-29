"use server";
import { sessionAuthenticator_S_A } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { authenticator_ServerActionResponsePreHandler } from "../server-actions-utils/authenticator-server-action-response-pre-handler";
import { revalidatePath } from "next/cache";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.js";

export async function revokeSpecificSession_ServerAction(session_id: string): ServerActionResponseWithPromise {
    const userSession = authenticator_ServerActionResponsePreHandler(await sessionAuthenticator_S_A());
    if (userSession.errors || !userSession.auth) {
        return userSession.errors;
    }
    const res = await mainUserServiceFetcher<ResponseTypesFor_Account_Section["terminate_specific_session"]>(
        `/v1/account/sessions/terminate_specific_session/${session_id}`,
        "DELETE",
    );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/user/settings/sessions");
        },
    });
}

"use server";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceRawResponsePreHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { revalidatePath } from "next/cache";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function revokeSpecificSession_ServerAction(session_id: string): ServerActionResponseWithPromise {
    const res = await fetchTheUserService<ResponseTypesFor_Account_Section["terminate_specific_session"]>(
        endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.terminateSpecificSession(session_id),
        "DELETE",
    );
    return await userServiceRawResponsePreHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/user/settings/sessions");
        },
    });
}

"use server";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import { revalidatePath } from "next/cache";
import type { ResponseTypesFor_Account_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function terminateSpecificSessionSA(session_id: string): ServerActionResponseWithPromise {
    const res = await userServiceRequest<ResponseTypesFor_Account_Section["terminate_specific_session"]>(
        endpointsConfig.userAccount.baseUrl + endpointsConfig.userAccount.terminateSpecificSession(session_id),
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/user-settings/sessions");
        },
    });
}

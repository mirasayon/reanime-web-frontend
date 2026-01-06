"use server";
import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import type { ResponseTypesFor_Media_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";

/*** Delete avatar */
export async function DeleteAvatar_ServerAction(): ServerActionResponseWithPromise {
    const res = await userServiceRequest<ResponseTypesFor_Media_Section["delete_avatar"]>(
        endpointsConfig.media.baseUrl + endpointsConfig.media.deleteAvatar,
        "DELETE",
    );
    return userServiceResponseHandler(res, {});
}

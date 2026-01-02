"use server";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";

/** Server Action */
export async function UpdateBio_ServerAction(bioText: string, currPath: string): ServerActionResponseWithPromise {
    const url = endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.updateBio;

    const res = await fetchTheUserService<ResponseTypesFor_UserProfile_Section["update_bio"]>(url, "PATCH", {
        jsonBody: {
            bio: bioText,
        },
    });
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}

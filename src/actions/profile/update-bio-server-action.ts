"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_UserProfile_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";

/** Server Action */
export async function UpdateBio_ServerAction(bioText: string, currPath: string): Promise<ServerActionResponse> {
    const url = endpointsConfig.userProfile.baseUrl + endpointsConfig.userProfile.updateBio;

    const res = await fetchTheUserService<ResponseTypesFor_UserProfile_Section["update_bio"]>(url, "PATCH", {
        jsonBody: {
            bio: bioText,
        },
    });
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath(currPath, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}

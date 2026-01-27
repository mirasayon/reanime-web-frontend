"use server";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { userServiceRequest } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";
/** Server action */
export async function deleteCommentServerAction(commentId: string, animeId: number): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteComment(commentId);
    const res = await userServiceRequest<ResponseTypesFor_CommentForAnime_Section["delete_comment"]>(url, "DELETE");
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/anime/" + animeId, "page");
        },
    });
}

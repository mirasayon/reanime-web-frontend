"use server";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";
/** Server action */
export async function deleteCommentServerAction(comment_id: string, animeId: number): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteComment(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["delete_comment"]>(url, "DELETE");
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/anime/" + animeId, "page");
        },
    });
}

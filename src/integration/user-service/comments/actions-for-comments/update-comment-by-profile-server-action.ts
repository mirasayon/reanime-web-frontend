"use server";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";

export async function updateComment_ServerAction(
    new_comment_content: string,
    commentId: string,
    animeId: number,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.updateComment(commentId);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["create_comment"]>(url, "PATCH", {
        jsonBody: {
            new_content: new_comment_content,
        },
    });
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath("/anime/" + animeId, "page");
        },
    });
}

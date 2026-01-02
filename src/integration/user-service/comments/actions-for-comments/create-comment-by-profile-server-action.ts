"use server";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";

/**
 * Server Action
 *
 * @returns
 */
export async function CreateOneCommentToAnime(
    comment_content: string,
    currPath: string,
    anime_id: number,
): ServerActionResponseWithPromise {
    const url =
        endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.createComment(String(anime_id));

    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["create_comment"]>(url, "POST", {
        jsonBody: {
            content: comment_content,
        },
    });

    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}

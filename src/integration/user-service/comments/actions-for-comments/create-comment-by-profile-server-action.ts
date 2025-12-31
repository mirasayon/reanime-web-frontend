"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

/**
 * Server Action
 *
 * @returns
 */
export async function CreateOneCommentToAnime(
    comment_content: string,
    currPath: string,
    anime_id: number,
): Promise<ServerActionResponse> {
    const url =
        endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.createComment(String(anime_id));

    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["create_comment"]>(url, "POST", {
        jsonBody: {
            content: comment_content,
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

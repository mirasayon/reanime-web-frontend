"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { revalidatePath } from "next/cache";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";

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
    const url = `/v1/comment/create/${anime_id}` as const;

    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section["create_comment"]>(url, "POST", {
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

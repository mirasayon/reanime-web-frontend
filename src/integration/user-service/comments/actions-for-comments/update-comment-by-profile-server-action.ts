"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";

/**
 * Server Action
 *
 * @returns
 */
export async function UpdateComment_ServerAction(
    new_comment_content: string,
    commentId: string,
    animeId: number,
): Promise<ServerActionResponse> {
    const url = `/v1/comment/update/${commentId}` as const;
    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section["create_comment"]>(url, "PATCH", {
        jsonBody: {
            new_content: new_comment_content,
        },
    });
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath("/anime/" + animeId, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}

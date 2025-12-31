"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
/** Server action */
export async function deleteCommentServerAction(comment_id: string, animeId: number): Promise<ServerActionResponse> {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteComment(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["delete_comment"]>(url, "DELETE");
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath("/anime/" + animeId, "page");
        return { msg: res.message, ok: true };
    }
    if (!res.errors.length) {
        return { errors: [internalErrTxt], ok: false };
    }
    return { errors: res.errors, ok: false };
}

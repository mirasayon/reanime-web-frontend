"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { revalidatePath } from "next/cache";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
/** Server action */
export async function deleteCommentServerAction(comment_id: string, animeId: number): Promise<ServerActionResponse> {
    const url = `/v1/comment/delete/${comment_id}` as const;
    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section["delete_comment"]>(url, "DELETE");
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

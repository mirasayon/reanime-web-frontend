"use server";

import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponse } from "#T/integrator-main-types";
/**
 * Server action
 * @returns
 */
export async function deleteCommentServerAction({
    comment_id,
    currPath,
    current_profile,
}: {
    comment_id: string;
    current_profile: AuthenticatorType;
    currPath: string;
}): Promise<ServerActionResponse> {
    const url = `/v1/comment/delete/${comment_id}` as const;
    if (!current_profile || current_profile === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    const res = await mainUserServiceFetcher<Comment_ResponseTypes.delete_comment>({
        agent: current_profile.agent,
        ip: current_profile.ip,
        method: "DELETE",
        url: url,
        session_token: current_profile.data.session.token,
    });
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath(currPath, "page");
        return { msg: res.message, ok: true };
    }
    if (!res.errors.length) {
        return { errors: [internalErrTxt], ok: false };
    }
    return { errors: res.errors, ok: false };
}

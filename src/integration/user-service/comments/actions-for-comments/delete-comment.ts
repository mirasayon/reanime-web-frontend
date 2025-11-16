"use server";

import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
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
}) {
    try {
        const url = `/v1/comment/delete/${comment_id}` as const;
        const res = await UserServiceFetcher<Comment_ResponseTypes.delete_comment>({
            agent: current_profile.agent,
            ip: current_profile.ip,
            method: "DELETE",
            url: url,
            session_token: current_profile.data.session.token,
        });
        if (res?.errors && res.errors?.length === 0) {
            revalidatePath(currPath, "page");
        }
        return res;
    } catch (error) {
        console.log(error);
        return false;
    }
}

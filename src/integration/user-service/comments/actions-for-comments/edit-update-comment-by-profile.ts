"use server";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import type { ServerActionResponse } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";

type CreateOneCommentToAnimeParams = {
    new_comment_content: string;
    comment: Comment_ResponseTypes.get_all_for_anime[number];
    current_user: AuthenticatorType;
};
/**
 * Server Action
 *
 * @returns
 */
export async function UpdateComment_ServerAction({
    current_user,
    new_comment_content,
    comment,
}: CreateOneCommentToAnimeParams): Promise<ServerActionResponse> {
    const url = `/v1/comment/update/${comment.id}` as const;
    if (current_user === null) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (current_user === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    const res =
        await mainUserServiceFetcher<Comment_ResponseTypes.create_comment>({
            agent: current_user.agent,
            ip: current_user.ip,
            method: "PATCH",
            json_body: {
                new_content: new_comment_content,
            },
            url: url,
            session_token: current_user.data.session.token,
        });
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath("/anime/" + comment.anime_id, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}

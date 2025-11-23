"use server";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import type { ServerActionResponse } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import { ensuredPassedUser_ForServerActions } from "../../auth/auth-current-user-finding-wrapper-for-server-actions.utility";

type CreateOneCommentToAnimeParams = {
    profile_id: string;
    comment_content: string;
    currPath: string;
    anime_id: number;
    authNotEnsured: AuthenticatorType;
};
/**
 * Server Action
 *
 * @returns
 */
export async function CreateOneCommentToAnime({
    authNotEnsured,
    anime_id,
    currPath,
    comment_content,
}: CreateOneCommentToAnimeParams): Promise<ServerActionResponse> {
    const url = `/v1/comment/create/${anime_id}` as const;
    const authEnsured = ensuredPassedUser_ForServerActions(authNotEnsured);
    if (authEnsured.error) {
        return authEnsured.error;
    }
    const auth_ensured = authEnsured.data;
    // if (current_profile === null) {
    //     return { errors: [internalErrTxt], ok: false };
    // }
    // if (current_profile === 500) {
    //     return { errors: [internalErrTxt], ok: false };
    // }
    const res =
        await mainUserServiceFetcher<Comment_ResponseTypes.create_comment>({
            agent: auth_ensured.agent,
            ip: auth_ensured.ip,
            method: "POST",
            json_body: {
                content: comment_content,
            },
            url: url,
            session_token: auth_ensured.data.session.token,
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

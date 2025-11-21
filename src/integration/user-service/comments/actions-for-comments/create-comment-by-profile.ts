"use server";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import type { ServerActionResponse } from "#T/integrator-main-types";
import { internalErrTxt } from "#/integration/constants/messages-from-services";

type CreateOneCommentToAnimeParams = {
    profile_id: string;
    comment_content: string;
    currPath: string;
    anime_id: number;
    current_profile: AuthenticatorType;
};
/**
 * Server Action
 *
 * @returns
 */
export async function CreateOneCommentToAnime({
    current_profile,
    anime_id,
    currPath,
    comment_content,
}: CreateOneCommentToAnimeParams): Promise<ServerActionResponse> {
    const url = `/v1/comment/create/${anime_id}` as const;
    if (current_profile === null) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (current_profile === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    const res = await mainUserServiceFetcher<Comment_ResponseTypes.create_comment>({
        agent: current_profile.agent,
        ip: current_profile.ip,
        method: "POST",
        json_body: {
            content: comment_content,
        },
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
    return { errors: res.errors, ok: false };
}

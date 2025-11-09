"use server";

import type { Comment_ResponseTypes } from "&us/response-patterns/comment.routes";
import type { UserServiceResponceBodyPattern } from "&us/response-patterns/response-json-body-shape";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { UserServiceFetcher } from "../../user-service-fetcher.integrator-util";

type CreateOneCommentToAnimeParams = {
    profile_id: string;
    comment_content: string;
    currPath: string;
    anime_id: number;
    current_profile: AuthenticatorType;
};
type responseType = UserServiceResponceBodyPattern<Comment_ResponseTypes.create_comment>;
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
}: CreateOneCommentToAnimeParams): Promise<responseType | false> {
    // return false;
    try {
        const url = `/v1/comment/create/${anime_id}` as const;
        const res = await UserServiceFetcher<Comment_ResponseTypes.create_comment>({
            agent: current_profile.agent,
            ip: current_profile.ip,
            method: "POST",
            json_body: {
                content: comment_content,
            },
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

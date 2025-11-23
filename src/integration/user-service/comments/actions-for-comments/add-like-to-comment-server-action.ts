"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import { authCurrentUserFindingWrapperForServerActionsUtility } from "../../auth/auth-current-user-finding-wrapper-for-server-actions.utility";

export async function addLikeToCommentForm_ServerAction({
    notProcessedAuthData,
    currPath,
    comment_id,
}: {
    comment_id: string;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): ServerActionResponseWithPromise {
    const url = `/v1/comment/add/like/${comment_id}` as const;
    const authProcessed =
        authCurrentUserFindingWrapperForServerActionsUtility(
            notProcessedAuthData,
        );
    if (authProcessed.error) {
        return authProcessed.error;
    }
    const authData = authProcessed.data;
    const res = await mainUserServiceFetcher<Comment_ResponseTypes.add_dislike>(
        {
            agent: authData.agent,
            ip: authData.ip,
            method: "POST",
            url: url,
            session_token: authData.data.session.token,
        },
    );
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath(currPath, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}

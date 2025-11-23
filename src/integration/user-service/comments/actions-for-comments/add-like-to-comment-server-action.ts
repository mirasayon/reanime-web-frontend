"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { Comment_ResponseTypes } from "#user-service/shared/response-patterns/comment.routes.js";
import { revalidatePath } from "next/cache";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import { ensuredPassedUser_ForServerActions } from "../../auth/auth-current-user-finding-wrapper-for-server-actions.utility";

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
        ensuredPassedUser_ForServerActions(notProcessedAuthData);
    if (authProcessed.error) {
        return authProcessed.error;
    }
    const authData = authProcessed.data;
    const res = await mainUserServiceFetcher<Comment_ResponseTypes.add_like>({
        agent: authData.agent,
        ip: authData.ip,
        method: "POST",
        url: url,
        session_token: authData.data.session.token,
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

export async function addDislikeToCommentForm_ServerAction({
    notProcessedAuthData,
    currPath,
    comment_id,
}: {
    comment_id: string;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): ServerActionResponseWithPromise {
    const url = `/v1/comment/add/dislike/${comment_id}` as const;
    const authProcessed =
        ensuredPassedUser_ForServerActions(notProcessedAuthData);
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

// delete
export async function deleteLikeToCommentForm_ServerAction({
    notProcessedAuthData,
    currPath,
    comment_id,
}: {
    comment_id: string;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): ServerActionResponseWithPromise {
    const url = `/v1/comment/delete/like/${comment_id}` as const;
    const authProcessed =
        ensuredPassedUser_ForServerActions(notProcessedAuthData);
    if (authProcessed.error) {
        return authProcessed.error;
    }
    const authData = authProcessed.data;
    const res = await mainUserServiceFetcher<Comment_ResponseTypes.delete_like>(
        {
            agent: authData.agent,
            ip: authData.ip,
            method: "DELETE",
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

export async function deleteDislikeToCommentForm_ServerAction({
    notProcessedAuthData,
    currPath,
    comment_id,
}: {
    comment_id: string;
    currPath: string;
    notProcessedAuthData: AuthenticatorType;
}): ServerActionResponseWithPromise {
    const url = `/v1/comment/delete/dislike/${comment_id}` as const;
    const authProcessed =
        ensuredPassedUser_ForServerActions(notProcessedAuthData);
    if (authProcessed.error) {
        return authProcessed.error;
    }
    const authData = authProcessed.data;
    const res =
        await mainUserServiceFetcher<Comment_ResponseTypes.delete_dislike>({
            agent: authData.agent,
            ip: authData.ip,
            method: "DELETE",
            url: url,
            session_token: authData.data.session.token,
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

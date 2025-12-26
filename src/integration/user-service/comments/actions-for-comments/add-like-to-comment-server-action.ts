"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.js";
import { revalidatePath } from "next/cache";
import { ensuredPassedUser_ForServerActions } from "../../auth/auth-current-user-finding-wrapper-for-server-actions.utility";
import type { AuthenticatorType } from "../../auth/cookie-authenticator.integrator";
import { mainUserServiceFetcher } from "../../user-service-fetcher.integrator-util";
import { getUserAgentAndIpFromCookies } from "#/integration/get-token-from-cookies";

export async function addLikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = `/v1/comment/add/like/${comment_id}` as const;

    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section.add_like>({
        method: "POST",
        url: url,
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
    currPath,
    comment_id,
}: {
    comment_id: string;
    currPath: string;
}): ServerActionResponseWithPromise {
    const url = `/v1/comment/add/dislike/${comment_id}` as const;
    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section.add_dislike>({
        method: "POST",
        url: url,
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

// delete
export async function deleteLikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = `/v1/comment/delete/like/${comment_id}` as const;
    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section.delete_like>({
        method: "DELETE",
        url: url,
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

export async function deleteDislikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = `/v1/comment/delete/dislike/${comment_id}` as const;
    const res = await mainUserServiceFetcher<ResponseTypesFor_CommentForAnime_Section.delete_dislike>({
        method: "DELETE",
        url: url,
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

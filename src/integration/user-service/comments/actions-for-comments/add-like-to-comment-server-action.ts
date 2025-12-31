"use server";
import { internalErrTxt } from "#/integration/constants/messages-from-services";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { fetchTheUserService } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";

export async function addLikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.addLike(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["add_like"]>(url, "POST");
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath(currPath, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}
export async function addDislikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.addDislike(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["add_dislike"]>(url, "POST");
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
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteLike(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["delete_like"]>(url, "DELETE");
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
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteDislike(comment_id);
    const res = await fetchTheUserService<ResponseTypesFor_CommentForAnime_Section["delete_dislike"]>(url, "DELETE");
    if (res === 500) {
        return { errors: [internalErrTxt], ok: false };
    }
    if (res.ok && res.data) {
        revalidatePath(currPath, "page");
        return { msg: res.message, ok: true };
    }
    return { errors: res.errors, ok: false };
}

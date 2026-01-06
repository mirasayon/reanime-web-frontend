"use server";
import type { ServerActionResponseWithPromise } from "#T/integrator-main-types";
import type { ResponseTypesFor_CommentForAnime_Section } from "#user-service/user-service-response-types-for-all.routes.ts";
import { revalidatePath } from "next/cache";
import { userServiceRequest } from "../../user-service-fetcher.integrator-util";
import { endpointsConfig } from "#user-service/endpoints-config.ts";
import { userServiceResponseHandler } from "#/actions/server-actions-utils/user-service-raw-response-pre-handler";

export async function addLikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.addLike(comment_id);
    const res = await userServiceRequest<ResponseTypesFor_CommentForAnime_Section["add_like"]>(url, "POST");

    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}
export async function addDislikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.addDislike(comment_id);
    const res = await userServiceRequest<ResponseTypesFor_CommentForAnime_Section["add_dislike"]>(url, "POST");
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}

// delete
export async function deleteLikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteLike(comment_id);
    const res = await userServiceRequest<ResponseTypesFor_CommentForAnime_Section["delete_like"]>(url, "DELETE");
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}

export async function deleteDislikeToCommentForm_ServerAction(
    comment_id: string,
    currPath: string,
): ServerActionResponseWithPromise {
    const url = endpointsConfig.commentAboutAnime.baseUrl + endpointsConfig.commentAboutAnime.deleteDislike(comment_id);
    const res = await userServiceRequest<ResponseTypesFor_CommentForAnime_Section["delete_dislike"]>(url, "DELETE");
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            revalidatePath(currPath, "page");
        },
    });
}

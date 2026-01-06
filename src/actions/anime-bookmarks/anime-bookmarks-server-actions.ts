"use server";

import { userServiceRequest } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { endpointsConfig } from "#/user-service-shared-package/endpoints-config";
import type { ResponseTypesFor_AnimeBookmark_Section } from "#/user-service-shared-package/user-service-response-types-for-all.routes";
import { revalidatePath } from "next/cache";
import { userServiceResponseHandler } from "../server-actions-utils/user-service-raw-response-pre-handler";

// planned anime
export async function addPlannedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["create_planned"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.createPlanned(String(animeId)),
        "POST",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

export async function deletePlannedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["delete_planned"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.deletePlanned(String(animeId)),
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

// Current anime
export async function addToCurrentAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["create_watching"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.createWatching(String(animeId)),
        "POST",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

export async function deleteFromCurrentAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["delete_watching"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.deleteWatching(String(animeId)),
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

// Abandoned anime
export async function addToAbandonedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["create_abandoned"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.createAbandoned(String(animeId)),
        "POST",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

export async function deleteFromAbandonedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["delete_abandoned"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.deleteAbandoned(String(animeId)),
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

// Completed anime
export async function addToCompletedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["create_completed"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.createCompleted(String(animeId)),
        "POST",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

export async function deleteFromCompletedAnimeServerAction(animeId: number) {
    const res = await userServiceRequest<ResponseTypesFor_AnimeBookmark_Section["delete_completed"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.deleteCompleted(String(animeId)),
        "DELETE",
    );
    return userServiceResponseHandler(res, {
        onSuccessFunction: () => {
            return revalidatePath(`/anime/${animeId}/page`);
        },
    });
}

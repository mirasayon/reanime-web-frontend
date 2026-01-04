"use server";
import type { AuthenticatorType } from "#/integration/user-service/auth/cookie-authenticator.integrator";
import { fetchTheUserService } from "#/integration/user-service/user-service-fetcher.integrator-util";
import { rea_wrapper_border } from "#/styles/provider";
import { endpointsConfig } from "#/user-service-shared-package/endpoints-config";
import type { ResponseTypesFor_AnimeBookmark_Section } from "#/user-service-shared-package/user-service-response-types-for-all.routes";
import { Linker } from "../utilities/common/linker-utility-component";
import {
    AddAnimeToPlannedForm,
    AddAnimeToAbandonedForm,
    AddAnimeToWatchingForm,
    AddAnimeToCompletedForm,
} from "./anime-collection-btn-handler-components";

export async function AnimeCollectionBtnsWrapper({ animeId, auth }: { animeId: number; auth: AuthenticatorType }) {
    if (!auth) {
        return (
            <div className={rea_wrapper_border + " p-2"}>
                <Linker href="/auth/login">Войти в аккаунт, чтобы добавлять аниме в закладки</Linker>
            </div>
        );
    }
    const collectionData = await fetchTheUserService<ResponseTypesFor_AnimeBookmark_Section["get_for_anime"]>(
        endpointsConfig.animeBookmarks.baseUrl + endpointsConfig.animeBookmarks.getStatusForAnime(String(animeId)),
        "GET",
    );
    const animeStatus = collectionData.data?.status || null;

    return (
        <div className={rea_wrapper_border + " p-2  flex-wrap gap-2 flex  "}>
            {!animeStatus && (
                <>
                    <AddAnimeToPlannedForm animeId={animeId} state={"create"} />
                    <AddAnimeToCompletedForm animeId={animeId} state={"create"} />
                    <AddAnimeToWatchingForm animeId={animeId} state={"create"} />
                    <AddAnimeToAbandonedForm animeId={animeId} state={"create"} />
                </>
            )}
            {animeStatus === "PLANNED" && <AddAnimeToPlannedForm animeId={animeId} state={"delete"} />}

            {animeStatus === "COMPLETED" && <AddAnimeToCompletedForm animeId={animeId} state={"delete"} />}

            {animeStatus === "WATCHING" && <AddAnimeToWatchingForm animeId={animeId} state={"delete"} />}

            {animeStatus === "ABANDONED" && <AddAnimeToAbandonedForm animeId={animeId} state={"delete"} />}
        </div>
    );
}

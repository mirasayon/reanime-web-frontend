import { getAnyByShikimoriFromKodikApi } from "#/libs/kodik/kodik-api-utils/get-any-by-id";
import type { EntityDataObject } from "kodik/types";
import { AnimeBookmarkCollectionSwitchTabComponent } from "./switch-collection-tab-component";
const animeCollectionStatuses = ["abandoned", "planned", "watching", "completed"] as const;
type AnimeCollectionStatus = (typeof animeCollectionStatuses)[number];
export async function AnimeBookmarkCollectionForProfile({
    tab,
    abandonedIds,
    watchingIds,
    plannedIds,
    completedIds,
}: {
    tab: string | undefined;
    abandonedIds: number[];
    watchingIds: number[];
    plannedIds: number[];
    completedIds: number[];
}): Promise<React.JSX.Element> {
    let tab_value = (tab || "watching") as AnimeCollectionStatus;

    if (!animeCollectionStatuses.includes(tab_value)) {
        tab_value = "watching";
    }

    const abandonedList: EntityDataObject[] = [];
    for await (const animeId of abandonedIds) {
        const anime = await getAnyByShikimoriFromKodikApi(animeId);
        if (anime) {
            abandonedList.push(anime);
        }
    }
    const watchingList: EntityDataObject[] = [];
    for await (const animeId of watchingIds) {
        const anime = await getAnyByShikimoriFromKodikApi(animeId);
        if (anime) {
            watchingList.push(anime);
        }
    }
    const plannedList: EntityDataObject[] = [];
    for await (const animeId of plannedIds) {
        const anime = await getAnyByShikimoriFromKodikApi(animeId);
        if (anime) {
            plannedList.push(anime);
        }
    }
    const completedList: EntityDataObject[] = [];
    for await (const animeId of completedIds) {
        const anime = await getAnyByShikimoriFromKodikApi(animeId);
        if (anime) {
            completedList.push(anime);
        }
    }
    return (
        <>
            <AnimeBookmarkCollectionSwitchTabComponent
                tab_value={tab_value}
                completedList={completedList}
                plannedList={plannedList}
                watchingList={watchingList}
                abandonedList={abandonedList}
            />
        </>
    );
}

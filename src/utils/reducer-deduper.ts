import type { EntityDataObject } from "kodik/types";

export function dedupeAnimes(data: EntityDataObject[]) {
    const reduced = data.reduce((accumulator, curr_item) => {
        const existing_index: number = accumulator.findIndex((one_item) => one_item.shikimori_id === curr_item.shikimori_id);
        const is_not_found = existing_index === -1;
        if (!is_not_found) {
            const one_new: IFetchedKodikMainReduced["translation"][number] = {
                ...curr_item.translation,
                unique_link: curr_item.link,
            };
            accumulator[existing_index].translation.push(one_new);
        }
        if (is_not_found) {
            const one_new: IFetchedKodikMainReduced = {
                ...curr_item,
                translation: [{ ...curr_item.translation, unique_link: curr_item.link }],
            };
            accumulator.push(one_new);
        }
        return accumulator;
    }, [] as IFetchedKodikMainReduced[]) as unknown as EntityDataObject[];

    return reduced;
}

export interface IFetchedKodikMainReduced extends Omit<EntityDataObject, "translation"> {
    translation: {
        id: number;
        unique_link: string;
        title: string;
        type: string;
    }[];
}

// import type { IDownloadedKodikMovies } from "#/types/downloaded-kodik-animes/movies-dumps.js";
// import type { IDownloadedKodikSeries } from "#/types/downloaded-kodik-animes/series-dumps.js";

// export interface reducedSeries extends Omit<IDownloadedKodikSeries, "translation"> {
//     translation: (IDownloadedKodikSeries["translation"] & { unique_link: string })[];
// }

// export interface reducedMovies extends Omit<IDownloadedKodikMovies, "translation"> {
//     translation: (IDownloadedKodikMovies["translation"] & { unique_link: string })[];
// }


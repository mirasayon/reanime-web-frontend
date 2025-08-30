import type { MaterialObject } from "kodik-api-simplified/resources";

export function dedupeAnimes(data: MaterialObject[]) {
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
    }, [] as IFetchedKodikMainReduced[]) as unknown as MaterialObject[];

    return reduced;
}

export interface IFetchedKodikMainReduced extends Omit<MaterialObject, "translation"> {
    translation: {
        id: number;
        unique_link: string;
        title: string;
        type: string;
    }[];
}

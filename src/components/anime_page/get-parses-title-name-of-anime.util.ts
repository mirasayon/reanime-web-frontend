import type { IReady_Animes_DB } from "&rs/ready-animes.types";

const hasDigit = (s: string): boolean => /\d/.test(s);
const LenghtLimit = 40;
/**
 * @param data
 * @returns
 */
export function parseTitleNameForAnime(data: IReady_Animes_DB) {
    let any_title = data.names.all.find((t) => !!t) || "";
    if (any_title.length > LenghtLimit) {
        any_title = `${any_title.slice(0, LenghtLimit)}...`;
    }
    if (hasDigit(any_title)) {
        return any_title;
    }
    if (data.season === 1) {
        return any_title;
    }
    const withSeason = data.season ? any_title + " " + data.season : any_title;
    return withSeason;
}


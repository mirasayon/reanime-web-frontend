import { envClient } from "#/env/env-client";

export function getTypeOfAnime(data: "anime-serial" | "anime" | (string & {})) {
    return data === "anime" ? "Фильм" : "Сериал";
}

export function hasOnlyLatinsAndNumbers(str: string): boolean {
    return /^[a-z\d]+$/gim.test(str);
}

export function hasNumberInFirstChar(str: string): boolean {
    return /^\d/.test(str);
}

export function hasOnlyLatinLetters(input: string): boolean {
    return /^[a-zA-Z]+$/gim.test(input);
}
export function hasOnlyNumericString(input: string): boolean {
    return /^\d+$/.test(input);
}

export function getAnimePosterUrlByShikimoriId(shikimori_id: number) {
    return envClient.resourceServiceUrl + `/get-anime-poster/${shikimori_id}`;
}

export function topAnimesPosterImageUrl(segment: string) {
    return `/_animes/top-chart-anime-posters/${segment}`;
}

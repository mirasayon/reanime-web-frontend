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

export function topChartAnimeCover(segment: string, res_url: string) {
    return `${res_url}/storage/animes/tcaps/${segment}` as const;
}

export function getAnimePosterUrlByShikimoriId(shikimori_id: string | number, resServerUrl: string) {
    return `${resServerUrl}/storage/anime/poster-image/${shikimori_id}` as const;
}

export function set_top_chart_animes_image_urlByUrl(segment: string, Url: string) {
    return `${Url}/storage/animes/tcaps/${segment}`;
}


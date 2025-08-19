export function set_top_chart_animes_image_urlByUrl(segment: string, Url: string) {
    return `${Url}/storage/animes/tcaps/${segment}` as const;
}

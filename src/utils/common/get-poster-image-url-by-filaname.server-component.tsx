// export function get_anime_frame_image_url(filename: string, anime_id: number, res_url: string) {
//     return `${res_url}/storage/animes/screenshots/${anime_id}/${filename}` as const;
// }

export function set_top_chart_animes_image_url(segment: string, res_url: string) {
    return `${res_url}/storage/animes/tcaps/${segment}` as const;
}


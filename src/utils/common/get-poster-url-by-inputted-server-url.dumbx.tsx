import { Default_poster } from "#/components/utilities/common/assembler-of-utilities.utilx";

export function get_poster_image_url_by_filename(shikimori_id: string, resServerUrl: string) {
    if (!shikimori_id) {
        return Default_poster(true);
    }
    return `${resServerUrl}/storage/anime/poster-image/${shikimori_id}` as const;
}


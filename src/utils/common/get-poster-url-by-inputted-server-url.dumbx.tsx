import { Default_poster } from "#/components/utilities/common/assembler-of-utilities.utilx";

export function get_poster_image_url_by_filename(filename: string | null, resServerUrl: string) {
    if (!filename) {
        return Default_poster(true);
    }
    return `${resServerUrl}/storage/anime/poster_image/${filename}` as const;
}

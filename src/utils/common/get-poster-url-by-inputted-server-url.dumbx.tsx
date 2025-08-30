import { Default_poster } from "#/components/utilities/common/assembler-of-utilities.utilx";

export function getAnimePosterUrlByShikimoriId(shikimori_id: string | number, resServerUrl: string) {
    if (!shikimori_id) {
        return Default_poster(true);
    }
    return `${resServerUrl}/storage/anime/poster-image/${shikimori_id}` as const;
}


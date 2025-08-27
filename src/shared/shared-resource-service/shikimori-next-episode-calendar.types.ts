export interface ITypeShikimoriNextEpisodesCalendar {
    /**
     *  @example 8
     */
    next_episode: number;
    /**
     *  @example "2025-08-21T15:26:00Z"
     */
    next_episode_at: string;
    /** @example 24 */
    duration: 24 | (number & {});
    anime: {
        /**  @example "60543" */
        id: string;
        /**  @example "Dandadan 2nd Season" */
        name: string;
        /**  @example "Дандадан 2" */
        russian: string;
        /** Poster image urls */
        image: {
            /** @example "https://shikimori.one/uploads/poster/animes/60543/3a43204e424cfba2f1d29df67940cccd.jpeg" */
            original: string;
            /** @example "https://shikimori.one/uploads/poster/animes/60543/preview-74d4bddf1ea6b5461bdaedde0388058a.webp" */
            preview: string;
            /** @example "https://shikimori.one/uploads/poster/animes/60543/main-ae4a7f654cdd8ac671108c8bf31483d0.webp"  */
            x96: string;
            /** @example "https://shikimori.one/uploads/poster/animes/60543/mini_2x-559ceea92e13ed5d8a3f43ec29361e93.webp" */
            x48: string;
            /** @example "https://shikimori.one/uploads/poster/animes/60543/mini-b54311e7f72ea8ff95d56570fc24cb74.webp" */
            x24: string;
        };
    };
    /**
     * @example "tv"
     */
    kind: "tv" | "movie" | "ona" | (string & {});
    score: 8.53;
    /** @example "ongoing" */
    status: "ongoing" | "anons" | (string & {});
    /** total episodes
     * @example 12
     */
    episodes: number;
    /**
     * @example 7
     */
    episodes_aired: number;

    /**
     * @example "2025-07-04"
     */
    aired_on: DateYMD;
    /**
     * @example "2025-09-19"
     */
    released_on: DateYMD;
}

/** */
type year = number & {};
type month = number & {};
type day = number & {};
type DateYMD = `${year}-${month}-${day}`;

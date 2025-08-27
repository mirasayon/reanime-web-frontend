// import { AllStudioTranslationORSubNamesData } from "./all-dub-or-sub-studio-names.array.js";

export type IAnimesForMovieAndSeriesJSON = {
    [shikimori_id: string]: IReady_Animes_DB;
};

// export type jsonType = {
//     [shikimori_id: string]: PostDB;
// };
export interface IReady_Animes_DB {
    /** Anime type.
     * An anime can be series or movie */
    type: "series" | "movie";
    /** Anime names */
    names: {
        /** Russion name . From shikimori api*/
        ru?: string;
        /** English name . From shikimori api*/
        en?: string;
        /** Other names . From shikimori api*/
        oth?: string;
        /** Japanese names. From shikimori api */
        jp?: string;
        /** Official anime's name . From shikimori api*/
        ofc?: string;
        /** Russion name. From kodik DB */
        kkru: string;
        /** Original name. From kodik DB */
        org: string;
        /** All names in array */
        all: string[];
    };
    /** Release date */
    rel_date?: string;
    /** Release year */
    rel_year: number;
    /** KinoPoisk ID */
    kp_id?: number;
    imdb_id: string | null;
    /** Myanimelist ID */
    mal_id?: number; //* from shikimor
    is_anons?: boolean; //* from shikimoris
    /** Worldart Link */
    wa_link: string | null;
    /** Anime poster image. From shikimori api.
     *  rea: /20.jpg
     */
    poster_image_from_source: string | null;
    /** Tizers or trailers on YT or VK Video. From shikimori API */
    promo?: {
        id: number;
        url: string;
        image_url: string;
        player_url: string;
        name: string;
        kind: string;
        hosting: "vk" | "youtube" | (string & {});
    }[];
    /** from shikimoris */
    genres_ShM: {
        id: number;
        name: string;
        russian: string;
        kind: string;
        entry_type: string;
    }[];
    /** A List of studios of the anime from Kodik API */
    studios_kk: string[];
    /** Anime Studios from shikimori DB */
    studios_sh: {
        id: number;
        name: string;
        filtered_name: string;
        real: boolean;
        /** "/system/studios/original/7.?1434707490"; */
        image: string;
    }[];
    /** Shikimori ID */
    sid: number;
    /** Is camrip video quality? . In boolean */
    camrip: boolean;
    /** Is LGBT. In boolean */
    lgbt: boolean;
    /**
     * Video quality
     */
    quality: "HDTVRip 720p" | "BDRip 720p" | "DVDRip" | (string & {});
    /** Class of anime.  */
    kind: null | (string & {}) | "ova" | "tv_special" | "tv" | "special" | "ona" | "movie";
    /** Current status of anime.  */
    status: null | "released" | "ongoing" | (string & {});
    /** A tagline is a short description or comment on a movie that is displayed on movie posters (or direct to video covers, etc.) to capture the essence of the movie, and ultimately make you watch the movie. */
    tagline: string | null;
    /** description || anime_description; */
    desc: string | null;
    /** screenshots. From both Kodik and Shikimori. Downloaded and hashed */
    screenshots_api: string[]; 
    /** Current season of anime.  */
    season?: number;
    /** episode duration in minutes */
    edim?: number;
    /** Countries that have released anime */
    cntrs?: string;
    /** KinoPoisk Rating. Rating from Kinopoisk. 0/10. From Kodik API */
    kp_rating?: number;
    /** Users that Rated the anime in Kinopoisk. From Kodik API */
    kp_votes?: number;
    /** Rating from IMDB. 0/10. From Kodik API */
    imdb_rating?: number;
    /** Users that Rated the anime in IMDB. From Kodik API */
    imdb_votes?: number;
    /** Anime rating, from 0 to 10. From Shikimori API */
    rating?: number;
    /** Shikimori Votes. Users that Rated the anime in Shikimori DB. From Kodik API */
    shm_votes?: number;
    /** Premiere date of the anime */
    premiere?: string;
    aired_at?: string;
    rating_mpaa: (string & {}) | null | "g" | "R" | "PG-13" | "r" | "pg" | "G" | "R+" | "PG" | "Rx";
    minimal_age?: number;
    /** All episodes of the anime series */
    eps_total?: number;
    /** Episodes that have been released */
    eps_aired?: number;
    /** Voice actors */
    actors: string[];
    directors: string[];
    /** List of the producers of the anime */
    producers: string[];
    writers: string[];
    composers: string[];
    editors: string[];
    designers: string[];
    /** Related animes or mangas. From shikimori API */
    rels: {
        rel: string;
        rel_ru: string;
        anime?: {
            id: number;
            name: string;
            russian: string;
            poster?: string;
            kind: "tv" | "movie" | "special" | "ona" | (string & {});
            status: "released" | "anons" | "ongoing" | (string & {});
            aired_on: string;
            released_on?: string;
        };
        manga?: {
            id: number;
            name: string;
            russian: string;
            poster: null | string;
            kind: "light_novel" | "manga" | (string & {});
            status: "released" | "anons" | "ongoing" | (string & {});
            aired_on: string;
            released_on: null | string;
        };
    }[];
    /**
     * For reanime
     */
    poster_image_for_rea: string | null;
    /** Watch data. From KODIK API. Anime Videos URLS for iframe */
    w: {
        /** Studio ID */
        sid: number;
        /** Studio Name */
        std: AllStudioTranslationORSubNames | (string & {});
        type: string;
        /** Link for movie */
        mov: string;
        /**
         *   For anime serials
         */
        ser?: {
            [season_n: string]: {
                link: string;
                episodes: {
                    [ep_n: string]: string;
                };
            };
        };
    }[];
}
type AllStudioTranslationORSubNames = string;
// type AllStudioTranslationORSubNames = (typeof AllStudioTranslationORSubNamesData)[number];

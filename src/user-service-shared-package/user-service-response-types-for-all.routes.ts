/** Response types for account section */
export interface ResponseTypesFor_Account_Section {
    explore_me: {
        email: string | null;
        username: string;
        created_at: Date;
        account_type: "COMMON" | "BANNED" | "ADMIN" | "DEVELOPER" | "TESTER";
    };
    update_email: boolean;
    set_email: boolean;
    update_password: boolean;
    update_username: boolean;
    get_sessions: {
        id: string;
        created_at: Date;
        expires_at: Date;
        last_used_at: Date;
        ip_address: string;
        ip_country: string | null;
        ip_region: string | null;
        ip_city: string | null;
        device_type: string | null;
        device_model: string | null;
        os: string | null;
        os_version: string | null;
        browser: string | null;
        browser_version: string | null;
    }[];
    delete_all_other_sessions: number;
    terminate_specific_session: boolean;
    delete_account: boolean;
}
/** Response types for administrator section */
export interface ResponseTypesForAdministratorSection {
    get_all_users: {
        id: string;
        email: string | null;
        username: string;
        created_at: Date;
        updated_at: Date;
        account_type: "COMMON" | "BANNED" | "ADMIN" | "DEVELOPER" | "TESTER";
        bio: string | null;
        nickname: string | null;
        avatar: {
            path_dirname: string;
            path_filename: string;
        } | null;
    }[];
}

interface AnimeBookmark {
    id: string;
    created_at: Date;
    updated_at: Date;
    by_profile_id: string;
    external_anime_id: number;
    status: "WATCHING" | "ABANDONED" | "PLANNED" | "COMPLETED";
}
/** Типы ответов для маршрута коллекции аниме */
export interface ResponseTypesFor_AnimeBookmark_Section {
    get_all_list: AnimeBookmark[];
    get_for_anime: AnimeBookmark;
    get_list_of_completed: AnimeBookmark[];
    get_list_of_planned: AnimeBookmark[];
    get_list_of_abandoned: AnimeBookmark[];
    get_list_of_watching: AnimeBookmark[];
    create_watching: boolean;
    create_planned: boolean;
    create_abandoned: boolean;
    create_completed: boolean;
    delete_abandoned: boolean;
    delete_watching: boolean;
    delete_planned: boolean;
    delete_completed: boolean;
}

/** Типы ответов для маршрута аутентификации */
export interface ResponseTypesForAuthentication {
    /** Токен сессии */
    login_via_email: string;
    /** Токен сессии */
    login_via_username: string;
    /** Токен сессии */
    registration: string;
    /** `false`- если используется имя пользователя, `true`- если доступно */
    check_username_availability: boolean;
    check_session: {
        id: string;
        profile_id: string;
        username: string;
        nickname: string | null;
        email: string | null;
        avatar_url: string | null;
        selector: string;
    };
    /** `true` - если успех, `false` : если ошибка */
    logout: boolean;
}

/** Типы ответов для маршрута комментариев на аниме */
export interface ResponseTypesFor_CommentForAnime_Section {
    get_all_for_anime: {
        id: string;
        created_at: Date;
        updated_at: Date;
        by_profile_id: string;
        ratings: {
            by_profile_id: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            value: number;
            to_comment_id: string;
        }[];
        nickname: string | null;
        avatar: {
            path_dirname: string;
            path_filename: string;
        } | null;
        username: string;
        content: string;
        is_visible: boolean;
        external_anime_id: number;
    }[];
    create_comment: boolean;
    update_comment: boolean;
    all_for_public_profile: {
        id: string;
        content: string;
        is_visible: boolean;
        external_anime_id: number;
        created_at: Date;
        updated_at: Date;
    }[];
    all_my_comments: {
        id: string;
        content: string;
        is_visible: boolean;
        external_anime_id: number;
    }[];
    add_like: boolean;
    delete_like: boolean;
    add_dislike: boolean;
    delete_dislike: boolean;
    delete_comment: boolean;
}

/** Response types for media section */
export interface ResponseTypesFor_Media_Section {
    set_avatar: boolean;
    delete_avatar: boolean;
    update_avatar: boolean;
}

export interface ResponseTypesFor_Ping_Section {
    get: "pong";
}

interface ReplyForComment {
    id: string;
    created_at: Date;
    updated_at: Date;
    content: string;
    by_profile_id: string;
    is_visible: boolean;
    to_comment_id: string;
}
/** Типы ответов для маршрута ответа на комментарий */
export interface ResponseTypesFor_ReplyToComment_Section {
    edit_reply: boolean;
    get_1_reply_by_its_id: ReplyForComment;
    get_replies_by_comment_id: ReplyForComment[];
    add_like: boolean;
    add_dislike: boolean;
    delete_like: boolean;
    delete_dislike: boolean;
    report: boolean;
    /** `true` - если успех, `false` : если ошибка */
    create_reply: boolean;
    /** `true` - если успех, `false` : если ошибка */
    delete_reply: boolean;
}
/** Типы ответов для маршрута профиля */
export interface ResponseTypesFor_UserProfile_Section {
    view_other_profiles: {
        email: string | null;
        username: string;
        created_at: Date;
        bio: string | null;
        nickname: string | null;
        date_of_birth: Date | null | number;
        gender: "MALE" | "FEMALE" | "OTHER" | "UNSPECIFIED";
        other_gender: string | null;
        avatar: {
            path_dirname: string;
            path_filename: string;
        } | null;
    };
    update_nickname: boolean;
    update_bio: boolean;
    view_my_profile: {
        account_type: "COMMON" | "BANNED" | "ADMIN" | "DEVELOPER" | "TESTER";
        email: string | null;
        avatar: null | {
            path_dirname: string;
            path_filename: string;
        };
        username: string;
        bio: string | null;
        nickname: string | null;
    };
}
interface VoteToAnime {
    id: string;
    created_at: Date;
    external_anime_id: number;
    value: number;
}
/** Response types for the anime like/dislike routes */
export interface ResponseTypesFor_VoteToAnime_Section {
    explore_likes: VoteToAnime[];
    explore_dislikes: VoteToAnime[];
    view_vote_on_anime: VoteToAnime | null;
    add_like_to_anime: boolean;
    delete_like_from_anime: boolean;
    add_dislike_to_anime: boolean;
    delete_dislike_from_anime: boolean;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// User Service Responses HTTP
export const userServiceHttpResponseConventionalCodes = {
    OK: "OK",
    CREATED: "CREATED",
    ACCEPTED: "ACCEPTED",
    BAD_REQUEST: "BAD_REQUEST",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    USE_SECURE_HTTP: "USE_SECURE_HTTP",
    NOT_FOUND: "NOT_FOUND",
    CONFLICT: "CONFLICT",
    BAD_GATEWAY: "BAD_GATEWAY",
    PAYLOAD_TOO_LARGE: "PAYLOAD_TOO_LARGE",
    TOO_MANY_REQUESTS: "TOO_MANY_REQUESTS",
    NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
    UNEXPECTED_INTERNAL_ERROR: "UNEXPECTED_INTERNAL_ERROR",
    EXPECTED_INTERNAL_ERROR: "EXPECTED_INTERNAL_ERROR",
    SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",
    I_AM_A_TEAPOT: "I_AM_A_TEAPOT",
} as const;
export type UserServiceHttpResponseConventionalCodeType =
    (typeof userServiceHttpResponseConventionalCodes)[keyof typeof userServiceHttpResponseConventionalCodes];

export const userServiceHttpResponseStatusCodes = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    PAYLOAD_TOO_LARGE: 413,
    TOO_MANY_REQUESTS: 429,
    NOT_IMPLEMENTED: 501,
    UNEXPECTED_INTERNAL_ERROR: 500,
    USE_SECURE_HTTP: 426,
    EXPECTED_INTERNAL_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    MEDIA_SERVICE_NOT_AVAILABLE: 503,
    MEDIA_SERVICE_ERROR: 503,
    BAD_GATEWAY: 502,
    I_AM_A_TEAPOT: 418,
} as const;

export type UserServiceHttpResponseStatusCodeType =
    (typeof userServiceHttpResponseStatusCodes)[keyof typeof userServiceHttpResponseStatusCodes];

/** Тип, представляющий стандартную структуру JSON-ответа.
 * @typeParam Data - Тип данных, включённые в поле `{data}` */
export interface UserServiceHttpResponseBodyPatternType<Data> {
    data: Data | null;
    errors: string[];
    /** `true` если запрос успешный, `false` если нет */
    ok: boolean;
    message: string;
    response_code: UserServiceHttpResponseConventionalCodeType;
    status_code: UserServiceHttpResponseStatusCodeType;
}

export type UserServiceHttpResponseBodyOptionalMessage = { message?: string | undefined };
export type UserServiceHttpResponseBodyOptionalMessageAndErrors = { errors: string[]; message?: string | undefined };
export type UserServiceHttpResponseBodyOptionalMessageAndData<D> = {
    data?: D | undefined;
    message?: string | undefined;
};

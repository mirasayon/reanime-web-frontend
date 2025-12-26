export declare namespace ResponseTypesFor_Account_Section {
    type explore_me = {
        email: string | null;
        username: string;
        created_at: Date;
        account_type: "COMMON" | "BANNED" | "ADMIN" | "DEVELOPER" | "TESTER";
    };
    type update_email = boolean;
    type set_email = boolean;
    type update_password = boolean;
    type update_username = boolean;
    type get_sessions = {
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
    type delete_all_other_sessions = number;
    type terminate_specific_session = boolean;
    type delete_account = boolean;
}
export declare namespace ResponseTypesForAdministratorSection {
    type get_all_users = {
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
type AnimeBookmark = {
    id: string;
    created_at: Date;
    updated_at: Date;
    by_profile_id: string;
    external_anime_id: number;
    status: "WATCHING" | "ABANDONED" | "PLANNED" | "COMPLETED";
};
export declare namespace ResponseTypesFor_AnimeBookmark_Section {
    type get_all_list = AnimeBookmark[];
    type get_for_anime = AnimeBookmark;
    type get_list_of_completed = AnimeBookmark[];
    type get_list_of_planned = AnimeBookmark[];
    type get_list_of_abandoned = AnimeBookmark[];
    type get_list_of_watching = AnimeBookmark[];
    type create_watching = boolean;
    type create_planned = boolean;
    type create_abandoned = boolean;
    type create_completed = boolean;
    type delete_abandoned = boolean;
    type delete_watching = boolean;
    type delete_planned = boolean;
    type delete_completed = boolean;
}
export declare namespace ResponseTypesForAuthentication {
    type login_via_email = string;
    type login_via_username = string;
    type registration = string;
    type check_username_availability = boolean;
    type check_session = {
        id: string;
        profile_id: string;
        username: string;
        nickname: string | null;
        email: string | null;
        avatar_url: string | null;
        selector: string;
    };
    type logout = boolean;
}
export declare namespace ResponseTypesFor_CommentForAnime_Section {
    type get_all_for_anime = {
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
    type create_comment = boolean;
    type update_comment = boolean;
    type all_for_public_profile = {
        id: string;
        content: string;
        is_visible: boolean;
        external_anime_id: number;
    }[];
    type all_my_comments = {
        id: string;
        content: string;
        is_visible: boolean;
        external_anime_id: number;
    }[];
    type add_like = boolean;
    type delete_like = boolean;
    type add_dislike = boolean;
    type delete_dislike = boolean;
    type delete_comment = boolean;
}
export declare namespace ResponseTypesFor_Media_Section {
    type set_avatar = boolean;
    type delete_avatar = boolean;
    type update_avatar = boolean;
}
export declare namespace ResponseTypesFor_Ping_Section {
    type get = "pong";
}
type ReplyForComment = {
    id: string;
    created_at: Date;
    updated_at: Date;
    content: string;
    by_profile_id: string;
    is_visible: boolean;
    to_comment_id: string;
};
export declare namespace ResponseTypesFor_ReplyToComment_Section {
    type edit_reply = boolean;
    type get_1_reply_by_its_id = ReplyForComment;
    type get_replies_by_comment_id = ReplyForComment[];
    type add_like = boolean;
    type add_dislike = boolean;
    type delete_like = boolean;
    type delete_dislike = boolean;
    type report = boolean;
    type create_reply = boolean;
    type delete_reply = boolean;
}
export declare namespace ResponseTypesFor_UserProfile_Section {
    type view_other_profiles = {
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
    type update_nickname = boolean;
    type update_bio = boolean;
    type view_my_profile = {
        account_type: "COMMON" | "BANNED" | "ADMIN" | "DEVELOPER" | "TESTER";
        email: string | null;
        username: string;
        bio: string | null;
        nickname: string | null;
    };
}
type VoteToAnime = {
    id: string;
    created_at: Date;
    external_anime_id: number;
    value: number;
};
export declare namespace ResponseTypesFor_VoteToAnime_Section {
    type explore_likes = VoteToAnime[];
    type explore_dislikes = VoteToAnime[];
    type view_vote_on_anime = VoteToAnime | null;
    type add_like_to_anime = boolean;
    type delete_like_from_anime = boolean;
    type add_dislike_to_anime = boolean;
    type delete_dislike_from_anime = boolean;
}
export {};

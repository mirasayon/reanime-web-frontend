import { type z as Z } from "zod";
export declare const accountSectionSchemas: {
    explore_me: Z.ZodUndefined;
    set_email: Z.ZodEmail;
    update_email: Z.ZodObject<{
        new_email: Z.ZodEmail;
        current_email: Z.ZodEmail;
    }, Z.core.$strict>;
    update_password: Z.ZodObject<{
        new_password: Z.ZodString;
        repeat_new_password: Z.ZodString;
        current_password: Z.ZodString;
    }, Z.core.$strict>;
    update_username: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
    get_sessions: Z.ZodUndefined;
    terminate_other_sessions: Z.ZodUndefined;
    terminate_specific_session: Z.ZodCUID;
    delete_account: Z.ZodUndefined;
};
export declare namespace accountSectionReqDtos {
    type explore_me = Z.infer<(typeof accountSectionSchemas)["explore_me"]>;
    type update_email = Z.infer<(typeof accountSectionSchemas)["update_email"]>;
    type set_email = Z.infer<(typeof accountSectionSchemas)["set_email"]>;
    type update_password = Z.infer<(typeof accountSectionSchemas)["update_password"]>;
    type update_username = Z.infer<(typeof accountSectionSchemas)["update_username"]>;
    type get_sessions = Z.infer<(typeof accountSectionSchemas)["get_sessions"]>;
    type terminate_other_sessions = Z.infer<(typeof accountSectionSchemas)["terminate_other_sessions"]>;
    type terminate_specific_session = Z.infer<(typeof accountSectionSchemas)["terminate_specific_session"]>;
    type delete_account = Z.infer<(typeof accountSectionSchemas)["delete_account"]>;
}
export declare const administratorSectionValidatorSchemas: {
    get_all_users: Z.ZodUndefined;
};
export declare namespace AdminSectionReqDtos {
    type get_all_users = Z.infer<(typeof administratorSectionValidatorSchemas)["get_all_users"]>;
}
export declare const authenticationSectionSchemas: {
    logout: Z.ZodUndefined;
    registration: Z.ZodObject<{
        nickname: Z.ZodString;
        username: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
        ip: Z.ZodString;
        email: Z.ZodOptional<Z.ZodEmail>;
        agent: Z.ZodOptional<Z.ZodString>;
        password: Z.ZodString;
        password_repeat: Z.ZodString;
    }, Z.core.$strict>;
    check_session: Z.ZodUndefined;
    login_by_username: Z.ZodObject<{
        username: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
        ip: Z.ZodString;
        agent: Z.ZodOptional<Z.ZodString>;
        password: Z.ZodString;
    }, Z.core.$strict>;
    check_username_availability: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
    login_by_email: Z.ZodObject<{
        email: Z.ZodEmail;
        ip: Z.ZodString;
        agent: Z.ZodOptional<Z.ZodString>;
        password: Z.ZodString;
    }, Z.core.$strict>;
};
export declare namespace AuthSectionReqDtos {
    type logout = Z.infer<(typeof authenticationSectionSchemas)["logout"]>;
    type registration = Z.infer<(typeof authenticationSectionSchemas)["registration"]>;
    type check_session = Z.infer<(typeof authenticationSectionSchemas)["check_session"]>;
    type login_by_email = Z.infer<(typeof authenticationSectionSchemas)["login_by_email"]>;
    type login_by_username = Z.infer<(typeof authenticationSectionSchemas)["login_by_username"]>;
    type check_username_availability = Z.infer<(typeof authenticationSectionSchemas)["check_username_availability"]>;
}
export declare const replyForCommentSectionZodSchemas: {
    get_1_reply_by_its_id: Z.ZodCUID;
    get_replies_by_comment_id: Z.ZodObject<{
        page: Z.ZodDefault<Z.ZodCoercedNumber<unknown>>;
        limit: Z.ZodCoercedNumber<unknown>;
        comment_id: Z.ZodCUID;
    }, Z.core.$strict>;
    create_reply: Z.ZodObject<{
        comment_id: Z.ZodCUID;
        content: Z.ZodString;
    }, Z.core.$strict>;
    update_reply: Z.ZodObject<{
        content: Z.ZodString;
        reply_id: Z.ZodCUID;
    }, Z.core.$strict>;
    delete_reply: Z.ZodCUID;
    report_reply: Z.ZodObject<{
        reply_id: Z.ZodCUID;
        details: Z.ZodString;
        type: Z.ZodEnum<{
            other: "other";
            spam: "spam";
            offensive: "offensive";
        }>;
    }, Z.core.$strict>;
    add_like: Z.ZodCUID;
    add_dislike: Z.ZodCUID;
    delete_like: Z.ZodCUID;
    delete_dislike: Z.ZodCUID;
};
export declare namespace ReplyForCommentReqDtos {
    type get_1_reply_by_its_id = Z.infer<(typeof replyForCommentSectionZodSchemas)["get_1_reply_by_its_id"]>;
    type get_replies_by_comment_id = Z.infer<(typeof replyForCommentSectionZodSchemas)["get_replies_by_comment_id"]>;
    type create_reply = Z.infer<(typeof replyForCommentSectionZodSchemas)["create_reply"]>;
    type update_reply = Z.infer<(typeof replyForCommentSectionZodSchemas)["update_reply"]>;
    type delete_reply = Z.infer<(typeof replyForCommentSectionZodSchemas)["delete_reply"]>;
    type report_reply = Z.infer<(typeof replyForCommentSectionZodSchemas)["report_reply"]>;
    type add_like = Z.infer<(typeof replyForCommentSectionZodSchemas)["add_like"]>;
    type add_dislike = Z.infer<(typeof replyForCommentSectionZodSchemas)["add_dislike"]>;
    type delete_like = Z.infer<(typeof replyForCommentSectionZodSchemas)["delete_like"]>;
    type delete_dislike = Z.infer<(typeof replyForCommentSectionZodSchemas)["delete_dislike"]>;
}
export declare const commentToAnimeSectionValidatorSchemas: {
    create: Z.ZodObject<{
        anime_id: Z.ZodCoercedNumber<unknown>;
        content: Z.ZodString;
    }, Z.core.$strict>;
    get_all_for_anime: Z.ZodObject<{
        page: Z.ZodDefault<Z.ZodCoercedNumber<unknown>>;
        limit: Z.ZodCoercedNumber<unknown>;
        anime_id: Z.ZodCoercedNumber<unknown>;
    }, Z.core.$strict>;
    all_my_comments: Z.ZodObject<{
        page: Z.ZodDefault<Z.ZodCoercedNumber<unknown>>;
        limit: Z.ZodCoercedNumber<unknown>;
    }, Z.core.$strict>;
    all_for_public_profile: Z.ZodObject<{
        page: Z.ZodDefault<Z.ZodCoercedNumber<unknown>>;
        username: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
        limit: Z.ZodCoercedNumber<unknown>;
    }, Z.core.$strict>;
    update: Z.ZodObject<{
        new_content: Z.ZodString;
        comment_id: Z.ZodCUID;
    }, Z.core.$strict>;
    delete_comment: Z.ZodCUID;
    report: Z.ZodObject<{
        comment_id: Z.ZodCUID;
        details: Z.ZodString;
        type: Z.ZodEnum<{
            other: "other";
            spam: "spam";
            offensive: "offensive";
        }>;
    }, Z.core.$strict>;
    add_like: Z.ZodCUID;
    add_dislike: Z.ZodCUID;
    delete_like: Z.ZodCUID;
    delete_dislike: Z.ZodCUID;
};
export declare namespace CommentToAnimeSectionReqDtos {
    type create = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["create"]>;
    type get_all_for_anime = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["get_all_for_anime"]>;
    type update = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["update"]>;
    type delete_comment = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_comment"]>;
    type report = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["report"]>;
    type all_my_comments = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["all_my_comments"]>;
    type all_for_public_profile = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["all_for_public_profile"]>;
    type add_like = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["add_like"]>;
    type add_dislike = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["add_dislike"]>;
    type delete_like = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_like"]>;
    type delete_dislike = Z.infer<(typeof commentToAnimeSectionValidatorSchemas)["delete_dislike"]>;
}
export declare const favoriteAnimes_schemas: {
    explore_likes: Z.ZodUndefined;
    explore_dislikes: Z.ZodUndefined;
    view_vote_on_anime: Z.ZodCoercedNumber<unknown>;
    add_like_to_anime: Z.ZodCoercedNumber<unknown>;
    delete_like_from_anime: Z.ZodCoercedNumber<unknown>;
    add_dislike_to_anime: Z.ZodCoercedNumber<unknown>;
    delete_dislike_from_anime: Z.ZodCoercedNumber<unknown>;
};
export declare namespace FavoriteAnimeReqDtoTypes {
    type explore_likes = Z.infer<(typeof favoriteAnimes_schemas)["explore_likes"]>;
    type explore_dislikes = Z.infer<(typeof favoriteAnimes_schemas)["explore_dislikes"]>;
    type view_vote_on_anime = Z.infer<(typeof favoriteAnimes_schemas)["view_vote_on_anime"]>;
    type add_like_to_anime = Z.infer<(typeof favoriteAnimes_schemas)["add_like_to_anime"]>;
    type delete_like_from_anime = Z.infer<(typeof favoriteAnimes_schemas)["delete_like_from_anime"]>;
    type add_dislike_to_anime = Z.infer<(typeof favoriteAnimes_schemas)["add_dislike_to_anime"]>;
    type delete_dislike_from_anime = Z.infer<(typeof favoriteAnimes_schemas)["delete_dislike_from_anime"]>;
}
export declare const animeMarkedCollection_schemas: {
    get_all_list: Z.ZodUndefined;
    explore_for_anime: Z.ZodCoercedNumber<unknown>;
    get_list_of_completed: Z.ZodUndefined;
    get_list_of_planned: Z.ZodUndefined;
    get_list_of_abandoned: Z.ZodUndefined;
    get_list_of_watching: Z.ZodUndefined;
    create_completed: Z.ZodCoercedNumber<unknown>;
    create_planned: Z.ZodCoercedNumber<unknown>;
    create_abandoned: Z.ZodCoercedNumber<unknown>;
    create_watching: Z.ZodCoercedNumber<unknown>;
    delete_completed: Z.ZodCoercedNumber<unknown>;
    delete_planned: Z.ZodCoercedNumber<unknown>;
    delete_abandoned: Z.ZodCoercedNumber<unknown>;
    delete_watching: Z.ZodCoercedNumber<unknown>;
};
export declare namespace MarkedAnimeCollectionReqDtoTypes {
    type get_all_list = Z.infer<(typeof animeMarkedCollection_schemas)["get_all_list"]>;
    type explore_for_anime = Z.infer<(typeof animeMarkedCollection_schemas)["explore_for_anime"]>;
    type get_list_of_completed = Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_completed"]>;
    type get_list_of_planned = Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_planned"]>;
    type get_list_of_abandoned = Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_abandoned"]>;
    type get_list_of_watching = Z.infer<(typeof animeMarkedCollection_schemas)["get_list_of_watching"]>;
    type create_completed = Z.infer<(typeof animeMarkedCollection_schemas)["create_completed"]>;
    type create_planned = Z.infer<(typeof animeMarkedCollection_schemas)["create_planned"]>;
    type create_abandoned = Z.infer<(typeof animeMarkedCollection_schemas)["create_abandoned"]>;
    type create_watching = Z.infer<(typeof animeMarkedCollection_schemas)["create_watching"]>;
    type delete_completed = Z.infer<(typeof animeMarkedCollection_schemas)["delete_completed"]>;
    type delete_planned = Z.infer<(typeof animeMarkedCollection_schemas)["delete_planned"]>;
    type delete_abandoned = Z.infer<(typeof animeMarkedCollection_schemas)["delete_abandoned"]>;
    type delete_watching = Z.infer<(typeof animeMarkedCollection_schemas)["delete_watching"]>;
}
export declare const mediaRouteValidatorSchemas: {
    avatar_view: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
    set_avatar: Z.ZodUndefined;
    update_avatar: Z.ZodUndefined;
    delete_avatar: Z.ZodUndefined;
};
export declare namespace mediaRouteValidatorDtos {
    type avatar_view = Z.infer<(typeof mediaRouteValidatorSchemas)["avatar_view"]>;
    type set_avatar = Z.infer<(typeof mediaRouteValidatorSchemas)["set_avatar"]>;
    type update_avatar = Z.infer<(typeof mediaRouteValidatorSchemas)["update_avatar"]>;
    type delete_avatar = Z.infer<(typeof mediaRouteValidatorSchemas)["delete_avatar"]>;
}
export declare const profileRouteValidatorSchemas: {
    other_profiles: Z.ZodPipe<Z.ZodString, Z.ZodTransform<string, string>>;
    my_profile: Z.ZodUndefined;
    update_bio: Z.ZodString;
    update_name: Z.ZodString;
};
export declare namespace profileRouteValidatorDtos {
    type other_profiles = Z.infer<(typeof profileRouteValidatorSchemas)["other_profiles"]>;
    type my_profile = Z.infer<(typeof profileRouteValidatorSchemas)["my_profile"]>;
    type update_bio = Z.infer<(typeof profileRouteValidatorSchemas)["update_bio"]>;
    type update_name = Z.infer<(typeof profileRouteValidatorSchemas)["update_name"]>;
}

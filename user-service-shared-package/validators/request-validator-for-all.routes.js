import { profileNicknameValidatorSchema } from "./nickname-validator-schema.js";
import { accountUsernameZodSchema } from "./username-validator-schema.js";
import { strictObject } from "zod";
import { zodUtilSchemas } from "./util-validators-for-requests.js";
export const accountSectionSchemas = {
    explore_me: zodUtilSchemas.void,
    set_email: zodUtilSchemas.email,
    update_email: strictObject({
        new_email: zodUtilSchemas.email,
        current_email: zodUtilSchemas.email,
    }),
    update_password: strictObject({
        new_password: zodUtilSchemas.account_password,
        repeat_new_password: zodUtilSchemas.account_password,
        current_password: zodUtilSchemas.account_password,
    }),
    update_username: accountUsernameZodSchema,
    get_sessions: zodUtilSchemas.void,
    terminate_other_sessions: zodUtilSchemas.void,
    terminate_specific_session: zodUtilSchemas.cuid("Айди сессии"),
    delete_account: zodUtilSchemas.void,
};
export const administratorSectionValidatorSchemas = {
    get_all_users: zodUtilSchemas.void,
};
export const authenticationSectionSchemas = {
    logout: zodUtilSchemas.void,
    registration: strictObject({
        nickname: profileNicknameValidatorSchema,
        username: accountUsernameZodSchema,
        ip: zodUtilSchemas.ip_address,
        email: zodUtilSchemas.email.optional(),
        agent: zodUtilSchemas.user_agent,
        password: zodUtilSchemas.account_password,
        password_repeat: zodUtilSchemas.account_password,
    }),
    check_session: zodUtilSchemas.void,
    login_by_username: strictObject({
        username: accountUsernameZodSchema,
        ip: zodUtilSchemas.ip_address,
        agent: zodUtilSchemas.user_agent,
        password: zodUtilSchemas.account_password,
    }),
    check_username_availability: accountUsernameZodSchema,
    login_by_email: strictObject({
        email: zodUtilSchemas.email,
        ip: zodUtilSchemas.ip_address,
        agent: zodUtilSchemas.user_agent,
        password: zodUtilSchemas.account_password,
    }),
};
export const replyForCommentSectionZodSchemas = {
    get_1_reply_by_its_id: zodUtilSchemas.reply_id,
    get_replies_by_comment_id: strictObject({
        page: zodUtilSchemas.page_number,
        limit: zodUtilSchemas.page_size,
        comment_id: zodUtilSchemas.comment_id,
    }),
    create_reply: strictObject({
        comment_id: zodUtilSchemas.comment_id,
        content: zodUtilSchemas.message("Ответ на комментарий"),
    }),
    update_reply: strictObject({
        content: zodUtilSchemas.message("Новый ответ"),
        reply_id: zodUtilSchemas.reply_id,
    }),
    delete_reply: zodUtilSchemas.reply_id,
    report_reply: strictObject({
        reply_id: zodUtilSchemas.reply_id,
        details: zodUtilSchemas.details,
        type: zodUtilSchemas.report_type,
    }),
    add_like: zodUtilSchemas.reply_id,
    add_dislike: zodUtilSchemas.reply_id,
    delete_like: zodUtilSchemas.reply_id,
    delete_dislike: zodUtilSchemas.reply_id,
};
export const commentToAnimeSectionValidatorSchemas = {
    create: strictObject({
        anime_id: zodUtilSchemas.anime_id,
        content: zodUtilSchemas.message("Комментарий"),
    }),
    get_all_for_anime: strictObject({
        page: zodUtilSchemas.page_number,
        limit: zodUtilSchemas.page_size,
        anime_id: zodUtilSchemas.anime_id,
    }),
    all_my_comments: strictObject({
        page: zodUtilSchemas.page_number,
        limit: zodUtilSchemas.page_size,
    }),
    all_for_public_profile: strictObject({
        page: zodUtilSchemas.page_number,
        username: accountUsernameZodSchema,
        limit: zodUtilSchemas.page_size,
    }),
    update: strictObject({
        new_content: zodUtilSchemas.message("Новый комментарий"),
        comment_id: zodUtilSchemas.comment_id,
    }),
    delete_comment: zodUtilSchemas.comment_id,
    report: strictObject({
        comment_id: zodUtilSchemas.comment_id,
        details: zodUtilSchemas.details,
        type: zodUtilSchemas.report_type,
    }),
    add_like: zodUtilSchemas.comment_id,
    add_dislike: zodUtilSchemas.comment_id,
    delete_like: zodUtilSchemas.comment_id,
    delete_dislike: zodUtilSchemas.comment_id,
};
export const favoriteAnimes_schemas = {
    explore_likes: zodUtilSchemas.void,
    explore_dislikes: zodUtilSchemas.void,
    view_vote_on_anime: zodUtilSchemas.anime_id,
    add_like_to_anime: zodUtilSchemas.anime_id,
    delete_like_from_anime: zodUtilSchemas.anime_id,
    add_dislike_to_anime: zodUtilSchemas.anime_id,
    delete_dislike_from_anime: zodUtilSchemas.anime_id,
};
export const animeMarkedCollection_schemas = {
    get_all_list: zodUtilSchemas.void,
    explore_for_anime: zodUtilSchemas.anime_id,
    get_list_of_completed: zodUtilSchemas.void,
    get_list_of_planned: zodUtilSchemas.void,
    get_list_of_abandoned: zodUtilSchemas.void,
    get_list_of_watching: zodUtilSchemas.void,
    create_completed: zodUtilSchemas.anime_id,
    create_planned: zodUtilSchemas.anime_id,
    create_abandoned: zodUtilSchemas.anime_id,
    create_watching: zodUtilSchemas.anime_id,
    delete_completed: zodUtilSchemas.anime_id,
    delete_planned: zodUtilSchemas.anime_id,
    delete_abandoned: zodUtilSchemas.anime_id,
    delete_watching: zodUtilSchemas.anime_id,
};
export const mediaRouteValidatorSchemas = {
    avatar_view: accountUsernameZodSchema,
    set_avatar: zodUtilSchemas.void,
    update_avatar: zodUtilSchemas.void,
    delete_avatar: zodUtilSchemas.void,
};
export const profileRouteValidatorSchemas = {
    other_profiles: accountUsernameZodSchema,
    my_profile: zodUtilSchemas.void,
    update_bio: zodUtilSchemas.message("О себе"),
    update_name: profileNicknameValidatorSchema,
};

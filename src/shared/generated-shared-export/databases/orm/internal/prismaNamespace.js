import * as runtime from "@prisma/client/runtime/client";
import {} from "./class.js";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.0.0",
    engine: "0c19ccc313cf9911a90d99d2ac2eb0280c76c513"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Account: 'Account',
    Session: 'Session',
    AvatarPicture: 'AvatarPicture',
    CoverPicture: 'CoverPicture',
    Profile: 'Profile',
    AnimeBookmark: 'AnimeBookmark',
    AnimeFavorite: 'AnimeFavorite',
    Reply: 'Reply',
    Comment: 'Comment',
    CommentVote: 'CommentVote',
    ReplyVote: 'ReplyVote'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AccountScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    type: 'type',
    email: 'email',
    username: 'username',
    password_hash: 'password_hash',
    is_activated: 'is_activated',
    activation_link: 'activation_link'
};
export const SessionScalarFieldEnum = {
    id: 'id',
    token: 'token',
    created_at: 'created_at',
    updated_at: 'updated_at',
    expires_at: 'expires_at',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    by_account_id: 'by_account_id'
};
export const AvatarPictureScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    url: 'url',
    by_profile_id: 'by_profile_id'
};
export const CoverPictureScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    url: 'url',
    by_profile_id: 'by_profile_id'
};
export const ProfileScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bio: 'bio',
    by_account_id: 'by_account_id',
    nickname: 'nickname'
};
export const AnimeBookmarkScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    profile_id: 'profile_id',
    anime_id: 'anime_id',
    status: 'status'
};
export const AnimeFavoriteScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    profile_id: 'profile_id',
    anime_id: 'anime_id',
    vote: 'vote'
};
export const ReplyScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    content: 'content',
    by_profile_id: 'by_profile_id',
    is_visible: 'is_visible',
    to_comment_id: 'to_comment_id'
};
export const CommentScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    content: 'content',
    is_visible: 'is_visible',
    by_profile_id: 'by_profile_id',
    anime_id: 'anime_id'
};
export const CommentVoteScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    by_profile_id: 'by_profile_id',
    comment_id: 'comment_id',
    vote: 'vote'
};
export const ReplyVoteScalarFieldEnum = {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    by_profile_id: 'by_profile_id',
    reply_id: 'reply_id',
    vote: 'vote'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
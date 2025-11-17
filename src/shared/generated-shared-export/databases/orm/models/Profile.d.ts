import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePayload>;
export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type ProfileMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    bio: string | null;
    by_account_id: string | null;
    nickname: string | null;
};
export type ProfileMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    bio: string | null;
    by_account_id: string | null;
    nickname: string | null;
};
export type ProfileCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    bio: number;
    by_account_id: number;
    nickname: number;
    _all: number;
};
export type ProfileMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    bio?: true;
    by_account_id?: true;
    nickname?: true;
};
export type ProfileMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    bio?: true;
    by_account_id?: true;
    nickname?: true;
};
export type ProfileCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    bio?: true;
    by_account_id?: true;
    nickname?: true;
    _all?: true;
};
export type ProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileCountAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfile[P]> : Prisma.GetScalarType<T[P], AggregateProfile[P]>;
};
export type ProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithAggregationInput | Prisma.ProfileOrderByWithAggregationInput[];
    by: Prisma.ProfileScalarFieldEnum[] | Prisma.ProfileScalarFieldEnum;
    having?: Prisma.ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type ProfileGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    bio: string | null;
    by_account_id: string;
    nickname: string | null;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]>;
}>>;
export type ProfileWhereInput = {
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    id?: Prisma.StringFilter<"Profile"> | string;
    created_at?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    bio?: Prisma.StringNullableFilter<"Profile"> | string | null;
    by_account_id?: Prisma.StringFilter<"Profile"> | string;
    nickname?: Prisma.StringNullableFilter<"Profile"> | string | null;
    avatar?: Prisma.XOR<Prisma.AvatarPictureNullableScalarRelationFilter, Prisma.AvatarPictureWhereInput> | null;
    cover?: Prisma.XOR<Prisma.CoverPictureNullableScalarRelationFilter, Prisma.CoverPictureWhereInput> | null;
    by_account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    comments?: Prisma.CommentListRelationFilter;
    replies_to_comment?: Prisma.ReplyListRelationFilter;
    reply_votes?: Prisma.ReplyVoteListRelationFilter;
    comment_votes?: Prisma.CommentVoteListRelationFilter;
    anime_votes?: Prisma.AnimeFavoriteListRelationFilter;
    anime_bookmarks?: Prisma.AnimeBookmarkListRelationFilter;
};
export type ProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.AvatarPictureOrderByWithRelationInput;
    cover?: Prisma.CoverPictureOrderByWithRelationInput;
    by_account?: Prisma.AccountOrderByWithRelationInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    replies_to_comment?: Prisma.ReplyOrderByRelationAggregateInput;
    reply_votes?: Prisma.ReplyVoteOrderByRelationAggregateInput;
    comment_votes?: Prisma.CommentVoteOrderByRelationAggregateInput;
    anime_votes?: Prisma.AnimeFavoriteOrderByRelationAggregateInput;
    anime_bookmarks?: Prisma.AnimeBookmarkOrderByRelationAggregateInput;
};
export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    by_account_id?: string;
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    bio?: Prisma.StringNullableFilter<"Profile"> | string | null;
    nickname?: Prisma.StringNullableFilter<"Profile"> | string | null;
    avatar?: Prisma.XOR<Prisma.AvatarPictureNullableScalarRelationFilter, Prisma.AvatarPictureWhereInput> | null;
    cover?: Prisma.XOR<Prisma.CoverPictureNullableScalarRelationFilter, Prisma.CoverPictureWhereInput> | null;
    by_account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    comments?: Prisma.CommentListRelationFilter;
    replies_to_comment?: Prisma.ReplyListRelationFilter;
    reply_votes?: Prisma.ReplyVoteListRelationFilter;
    comment_votes?: Prisma.CommentVoteListRelationFilter;
    anime_votes?: Prisma.AnimeFavoriteListRelationFilter;
    anime_bookmarks?: Prisma.AnimeBookmarkListRelationFilter;
}, "id" | "by_account_id">;
export type ProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    nickname?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ProfileCountOrderByAggregateInput;
    _max?: Prisma.ProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMinOrderByAggregateInput;
};
export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    by_account_id?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    nickname?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
};
export type ProfileCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
};
export type ProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProfileNullableScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput | null;
    isNot?: Prisma.ProfileWhereInput | null;
};
export type ProfileScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput;
    isNot?: Prisma.ProfileWhereInput;
};
export type ProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
};
export type ProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
};
export type ProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    by_account_id?: Prisma.SortOrder;
    nickname?: Prisma.SortOrder;
};
export type ProfileCreateNestedOneWithoutBy_accountInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutBy_accountInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUncheckedCreateNestedOneWithoutBy_accountInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutBy_accountInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutBy_accountNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutBy_accountInput;
    upsert?: Prisma.ProfileUpsertWithoutBy_accountInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutBy_accountInput, Prisma.ProfileUpdateWithoutBy_accountInput>, Prisma.ProfileUncheckedUpdateWithoutBy_accountInput>;
};
export type ProfileUncheckedUpdateOneWithoutBy_accountNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutBy_accountInput;
    upsert?: Prisma.ProfileUpsertWithoutBy_accountInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutBy_accountInput, Prisma.ProfileUpdateWithoutBy_accountInput>, Prisma.ProfileUncheckedUpdateWithoutBy_accountInput>;
};
export type ProfileCreateNestedOneWithoutAvatarInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAvatarInput, Prisma.ProfileUncheckedCreateWithoutAvatarInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAvatarInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAvatarNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAvatarInput, Prisma.ProfileUncheckedCreateWithoutAvatarInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAvatarInput;
    upsert?: Prisma.ProfileUpsertWithoutAvatarInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAvatarInput, Prisma.ProfileUpdateWithoutAvatarInput>, Prisma.ProfileUncheckedUpdateWithoutAvatarInput>;
};
export type ProfileCreateNestedOneWithoutCoverInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCoverInput, Prisma.ProfileUncheckedCreateWithoutCoverInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCoverInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutCoverNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCoverInput, Prisma.ProfileUncheckedCreateWithoutCoverInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCoverInput;
    upsert?: Prisma.ProfileUpsertWithoutCoverInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutCoverInput, Prisma.ProfileUpdateWithoutCoverInput>, Prisma.ProfileUncheckedUpdateWithoutCoverInput>;
};
export type ProfileCreateNestedOneWithoutAnime_bookmarksInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedCreateWithoutAnime_bookmarksInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnime_bookmarksInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAnime_bookmarksNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedCreateWithoutAnime_bookmarksInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnime_bookmarksInput;
    upsert?: Prisma.ProfileUpsertWithoutAnime_bookmarksInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAnime_bookmarksInput, Prisma.ProfileUpdateWithoutAnime_bookmarksInput>, Prisma.ProfileUncheckedUpdateWithoutAnime_bookmarksInput>;
};
export type ProfileCreateNestedOneWithoutAnime_votesInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_votesInput, Prisma.ProfileUncheckedCreateWithoutAnime_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnime_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAnime_votesNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_votesInput, Prisma.ProfileUncheckedCreateWithoutAnime_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnime_votesInput;
    upsert?: Prisma.ProfileUpsertWithoutAnime_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAnime_votesInput, Prisma.ProfileUpdateWithoutAnime_votesInput>, Prisma.ProfileUncheckedUpdateWithoutAnime_votesInput>;
};
export type ProfileCreateNestedOneWithoutReplies_to_commentInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedCreateWithoutReplies_to_commentInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReplies_to_commentInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutReplies_to_commentNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedCreateWithoutReplies_to_commentInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReplies_to_commentInput;
    upsert?: Prisma.ProfileUpsertWithoutReplies_to_commentInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutReplies_to_commentInput, Prisma.ProfileUpdateWithoutReplies_to_commentInput>, Prisma.ProfileUncheckedUpdateWithoutReplies_to_commentInput>;
};
export type ProfileCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCommentsInput, Prisma.ProfileUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCommentsInput, Prisma.ProfileUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.ProfileUpsertWithoutCommentsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutCommentsInput, Prisma.ProfileUpdateWithoutCommentsInput>, Prisma.ProfileUncheckedUpdateWithoutCommentsInput>;
};
export type ProfileCreateNestedOneWithoutComment_votesInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutComment_votesInput, Prisma.ProfileUncheckedCreateWithoutComment_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutComment_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutComment_votesNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutComment_votesInput, Prisma.ProfileUncheckedCreateWithoutComment_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutComment_votesInput;
    upsert?: Prisma.ProfileUpsertWithoutComment_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutComment_votesInput, Prisma.ProfileUpdateWithoutComment_votesInput>, Prisma.ProfileUncheckedUpdateWithoutComment_votesInput>;
};
export type ProfileCreateNestedOneWithoutReply_votesInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReply_votesInput, Prisma.ProfileUncheckedCreateWithoutReply_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReply_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutReply_votesNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReply_votesInput, Prisma.ProfileUncheckedCreateWithoutReply_votesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReply_votesInput;
    upsert?: Prisma.ProfileUpsertWithoutReply_votesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutReply_votesInput, Prisma.ProfileUpdateWithoutReply_votesInput>, Prisma.ProfileUncheckedUpdateWithoutReply_votesInput>;
};
export type ProfileCreateWithoutBy_accountInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutBy_accountInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutBy_accountInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
};
export type ProfileUpsertWithoutBy_accountInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutBy_accountInput, Prisma.ProfileUncheckedUpdateWithoutBy_accountInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutBy_accountInput, Prisma.ProfileUncheckedCreateWithoutBy_accountInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutBy_accountInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutBy_accountInput, Prisma.ProfileUncheckedUpdateWithoutBy_accountInput>;
};
export type ProfileUpdateWithoutBy_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutBy_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutAvatarInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAvatarInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAvatarInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAvatarInput, Prisma.ProfileUncheckedCreateWithoutAvatarInput>;
};
export type ProfileUpsertWithoutAvatarInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAvatarInput, Prisma.ProfileUncheckedUpdateWithoutAvatarInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAvatarInput, Prisma.ProfileUncheckedCreateWithoutAvatarInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAvatarInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAvatarInput, Prisma.ProfileUncheckedUpdateWithoutAvatarInput>;
};
export type ProfileUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAvatarInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutCoverInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutCoverInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutCoverInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCoverInput, Prisma.ProfileUncheckedCreateWithoutCoverInput>;
};
export type ProfileUpsertWithoutCoverInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutCoverInput, Prisma.ProfileUncheckedUpdateWithoutCoverInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCoverInput, Prisma.ProfileUncheckedCreateWithoutCoverInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutCoverInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutCoverInput, Prisma.ProfileUncheckedUpdateWithoutCoverInput>;
};
export type ProfileUpdateWithoutCoverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutCoverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutAnime_bookmarksInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAnime_bookmarksInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAnime_bookmarksInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedCreateWithoutAnime_bookmarksInput>;
};
export type ProfileUpsertWithoutAnime_bookmarksInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedUpdateWithoutAnime_bookmarksInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedCreateWithoutAnime_bookmarksInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAnime_bookmarksInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAnime_bookmarksInput, Prisma.ProfileUncheckedUpdateWithoutAnime_bookmarksInput>;
};
export type ProfileUpdateWithoutAnime_bookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAnime_bookmarksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutAnime_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAnime_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAnime_votesInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_votesInput, Prisma.ProfileUncheckedCreateWithoutAnime_votesInput>;
};
export type ProfileUpsertWithoutAnime_votesInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAnime_votesInput, Prisma.ProfileUncheckedUpdateWithoutAnime_votesInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnime_votesInput, Prisma.ProfileUncheckedCreateWithoutAnime_votesInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAnime_votesInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAnime_votesInput, Prisma.ProfileUncheckedUpdateWithoutAnime_votesInput>;
};
export type ProfileUpdateWithoutAnime_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAnime_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutReplies_to_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutReplies_to_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutReplies_to_commentInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedCreateWithoutReplies_to_commentInput>;
};
export type ProfileUpsertWithoutReplies_to_commentInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedUpdateWithoutReplies_to_commentInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedCreateWithoutReplies_to_commentInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutReplies_to_commentInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutReplies_to_commentInput, Prisma.ProfileUncheckedUpdateWithoutReplies_to_commentInput>;
};
export type ProfileUpdateWithoutReplies_to_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutReplies_to_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutCommentsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutCommentsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutCommentsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCommentsInput, Prisma.ProfileUncheckedCreateWithoutCommentsInput>;
};
export type ProfileUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutCommentsInput, Prisma.ProfileUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCommentsInput, Prisma.ProfileUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutCommentsInput, Prisma.ProfileUncheckedUpdateWithoutCommentsInput>;
};
export type ProfileUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutComment_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutComment_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    reply_votes?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutComment_votesInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutComment_votesInput, Prisma.ProfileUncheckedCreateWithoutComment_votesInput>;
};
export type ProfileUpsertWithoutComment_votesInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutComment_votesInput, Prisma.ProfileUncheckedUpdateWithoutComment_votesInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutComment_votesInput, Prisma.ProfileUncheckedCreateWithoutComment_votesInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutComment_votesInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutComment_votesInput, Prisma.ProfileUncheckedUpdateWithoutComment_votesInput>;
};
export type ProfileUpdateWithoutComment_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutComment_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    reply_votes?: Prisma.ReplyVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutReply_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureCreateNestedOneWithoutBy_profileInput;
    by_account: Prisma.AccountCreateNestedOneWithoutProfileInput;
    comments?: Prisma.CommentCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutReply_votesInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bio?: string | null;
    by_account_id: string;
    nickname?: string | null;
    avatar?: Prisma.AvatarPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    cover?: Prisma.CoverPictureUncheckedCreateNestedOneWithoutBy_profileInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutBy_profileInput;
    replies_to_comment?: Prisma.ReplyUncheckedCreateNestedManyWithoutBy_profileInput;
    comment_votes?: Prisma.CommentVoteUncheckedCreateNestedManyWithoutBy_profileInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedCreateNestedManyWithoutProfileInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutReply_votesInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReply_votesInput, Prisma.ProfileUncheckedCreateWithoutReply_votesInput>;
};
export type ProfileUpsertWithoutReply_votesInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutReply_votesInput, Prisma.ProfileUncheckedUpdateWithoutReply_votesInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReply_votesInput, Prisma.ProfileUncheckedCreateWithoutReply_votesInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutReply_votesInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutReply_votesInput, Prisma.ProfileUncheckedUpdateWithoutReply_votesInput>;
};
export type ProfileUpdateWithoutReply_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUpdateOneWithoutBy_profileNestedInput;
    by_account?: Prisma.AccountUpdateOneRequiredWithoutProfileNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutReply_votesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    by_account_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nickname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.AvatarPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    cover?: Prisma.CoverPictureUncheckedUpdateOneWithoutBy_profileNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutBy_profileNestedInput;
    replies_to_comment?: Prisma.ReplyUncheckedUpdateManyWithoutBy_profileNestedInput;
    comment_votes?: Prisma.CommentVoteUncheckedUpdateManyWithoutBy_profileNestedInput;
    anime_votes?: Prisma.AnimeFavoriteUncheckedUpdateManyWithoutProfileNestedInput;
    anime_bookmarks?: Prisma.AnimeBookmarkUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCountOutputType = {
    comments: number;
    replies_to_comment: number;
    reply_votes: number;
    comment_votes: number;
    anime_votes: number;
    anime_bookmarks: number;
};
export type ProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | ProfileCountOutputTypeCountCommentsArgs;
    replies_to_comment?: boolean | ProfileCountOutputTypeCountReplies_to_commentArgs;
    reply_votes?: boolean | ProfileCountOutputTypeCountReply_votesArgs;
    comment_votes?: boolean | ProfileCountOutputTypeCountComment_votesArgs;
    anime_votes?: boolean | ProfileCountOutputTypeCountAnime_votesArgs;
    anime_bookmarks?: boolean | ProfileCountOutputTypeCountAnime_bookmarksArgs;
};
export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfileCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type ProfileCountOutputTypeCountReplies_to_commentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyWhereInput;
};
export type ProfileCountOutputTypeCountReply_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyVoteWhereInput;
};
export type ProfileCountOutputTypeCountComment_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentVoteWhereInput;
};
export type ProfileCountOutputTypeCountAnime_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeFavoriteWhereInput;
};
export type ProfileCountOutputTypeCountAnime_bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnimeBookmarkWhereInput;
};
export type ProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bio?: boolean;
    by_account_id?: boolean;
    nickname?: boolean;
    avatar?: boolean | Prisma.Profile$avatarArgs<ExtArgs>;
    cover?: boolean | Prisma.Profile$coverArgs<ExtArgs>;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.Profile$commentsArgs<ExtArgs>;
    replies_to_comment?: boolean | Prisma.Profile$replies_to_commentArgs<ExtArgs>;
    reply_votes?: boolean | Prisma.Profile$reply_votesArgs<ExtArgs>;
    comment_votes?: boolean | Prisma.Profile$comment_votesArgs<ExtArgs>;
    anime_votes?: boolean | Prisma.Profile$anime_votesArgs<ExtArgs>;
    anime_bookmarks?: boolean | Prisma.Profile$anime_bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bio?: boolean;
    by_account_id?: boolean;
    nickname?: boolean;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bio?: boolean;
    by_account_id?: boolean;
    nickname?: boolean;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bio?: boolean;
    by_account_id?: boolean;
    nickname?: boolean;
};
export type ProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "bio" | "by_account_id" | "nickname", ExtArgs["result"]["profile"]>;
export type ProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    avatar?: boolean | Prisma.Profile$avatarArgs<ExtArgs>;
    cover?: boolean | Prisma.Profile$coverArgs<ExtArgs>;
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.Profile$commentsArgs<ExtArgs>;
    replies_to_comment?: boolean | Prisma.Profile$replies_to_commentArgs<ExtArgs>;
    reply_votes?: boolean | Prisma.Profile$reply_votesArgs<ExtArgs>;
    comment_votes?: boolean | Prisma.Profile$comment_votesArgs<ExtArgs>;
    anime_votes?: boolean | Prisma.Profile$anime_votesArgs<ExtArgs>;
    anime_bookmarks?: boolean | Prisma.Profile$anime_bookmarksArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type $ProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profile";
    objects: {
        avatar: Prisma.$AvatarPicturePayload<ExtArgs> | null;
        cover: Prisma.$CoverPicturePayload<ExtArgs> | null;
        by_account: Prisma.$AccountPayload<ExtArgs>;
        comments: Prisma.$CommentPayload<ExtArgs>[];
        replies_to_comment: Prisma.$ReplyPayload<ExtArgs>[];
        reply_votes: Prisma.$ReplyVotePayload<ExtArgs>[];
        comment_votes: Prisma.$CommentVotePayload<ExtArgs>[];
        anime_votes: Prisma.$AnimeFavoritePayload<ExtArgs>[];
        anime_bookmarks: Prisma.$AnimeBookmarkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        bio: string | null;
        by_account_id: string;
        nickname: string | null;
    }, ExtArgs["result"]["profile"]>;
    composites: {};
};
export type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePayload, S>;
export type ProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
};
export interface ProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
        meta: {
            name: 'Profile';
        };
    };
    findUnique<T extends ProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileCreateArgs>(args: Prisma.SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileCountArgs>(args?: Prisma.Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileCountAggregateOutputType> : number>;
    aggregate<T extends ProfileAggregateArgs>(args: Prisma.Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
    groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileFieldRefs;
}
export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    avatar<T extends Prisma.Profile$avatarArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$avatarArgs<ExtArgs>>): Prisma.Prisma__AvatarPictureClient<runtime.Types.Result.GetResult<Prisma.$AvatarPicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cover<T extends Prisma.Profile$coverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$coverArgs<ExtArgs>>): Prisma.Prisma__CoverPictureClient<runtime.Types.Result.GetResult<Prisma.$CoverPicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    by_account<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.Profile$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    replies_to_comment<T extends Prisma.Profile$replies_to_commentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$replies_to_commentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reply_votes<T extends Prisma.Profile$reply_votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$reply_votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comment_votes<T extends Prisma.Profile$comment_votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$comment_votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    anime_votes<T extends Prisma.Profile$anime_votesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$anime_votesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    anime_bookmarks<T extends Prisma.Profile$anime_bookmarksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$anime_bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnimeBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileFieldRefs {
    readonly id: Prisma.FieldRef<"Profile", 'String'>;
    readonly created_at: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly bio: Prisma.FieldRef<"Profile", 'String'>;
    readonly by_account_id: Prisma.FieldRef<"Profile", 'String'>;
    readonly nickname: Prisma.FieldRef<"Profile", 'String'>;
}
export type ProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
};
export type ProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type ProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
    include?: Prisma.ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
};
export type ProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type Profile$avatarArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AvatarPictureSelect<ExtArgs> | null;
    omit?: Prisma.AvatarPictureOmit<ExtArgs> | null;
    include?: Prisma.AvatarPictureInclude<ExtArgs> | null;
    where?: Prisma.AvatarPictureWhereInput;
};
export type Profile$coverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CoverPictureSelect<ExtArgs> | null;
    omit?: Prisma.CoverPictureOmit<ExtArgs> | null;
    include?: Prisma.CoverPictureInclude<ExtArgs> | null;
    where?: Prisma.CoverPictureWhereInput;
};
export type Profile$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type Profile$replies_to_commentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    where?: Prisma.ReplyWhereInput;
    orderBy?: Prisma.ReplyOrderByWithRelationInput | Prisma.ReplyOrderByWithRelationInput[];
    cursor?: Prisma.ReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplyScalarFieldEnum | Prisma.ReplyScalarFieldEnum[];
};
export type Profile$reply_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyVoteSelect<ExtArgs> | null;
    omit?: Prisma.ReplyVoteOmit<ExtArgs> | null;
    include?: Prisma.ReplyVoteInclude<ExtArgs> | null;
    where?: Prisma.ReplyVoteWhereInput;
    orderBy?: Prisma.ReplyVoteOrderByWithRelationInput | Prisma.ReplyVoteOrderByWithRelationInput[];
    cursor?: Prisma.ReplyVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReplyVoteScalarFieldEnum | Prisma.ReplyVoteScalarFieldEnum[];
};
export type Profile$comment_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentVoteSelect<ExtArgs> | null;
    omit?: Prisma.CommentVoteOmit<ExtArgs> | null;
    include?: Prisma.CommentVoteInclude<ExtArgs> | null;
    where?: Prisma.CommentVoteWhereInput;
    orderBy?: Prisma.CommentVoteOrderByWithRelationInput | Prisma.CommentVoteOrderByWithRelationInput[];
    cursor?: Prisma.CommentVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentVoteScalarFieldEnum | Prisma.CommentVoteScalarFieldEnum[];
};
export type Profile$anime_votesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeFavoriteSelect<ExtArgs> | null;
    omit?: Prisma.AnimeFavoriteOmit<ExtArgs> | null;
    include?: Prisma.AnimeFavoriteInclude<ExtArgs> | null;
    where?: Prisma.AnimeFavoriteWhereInput;
    orderBy?: Prisma.AnimeFavoriteOrderByWithRelationInput | Prisma.AnimeFavoriteOrderByWithRelationInput[];
    cursor?: Prisma.AnimeFavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeFavoriteScalarFieldEnum | Prisma.AnimeFavoriteScalarFieldEnum[];
};
export type Profile$anime_bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnimeBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.AnimeBookmarkOmit<ExtArgs> | null;
    include?: Prisma.AnimeBookmarkInclude<ExtArgs> | null;
    where?: Prisma.AnimeBookmarkWhereInput;
    orderBy?: Prisma.AnimeBookmarkOrderByWithRelationInput | Prisma.AnimeBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.AnimeBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnimeBookmarkScalarFieldEnum | Prisma.AnimeBookmarkScalarFieldEnum[];
};
export type ProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Profile.d.ts.map
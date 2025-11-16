import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReplyModel = runtime.Types.Result.DefaultSelection<Prisma.$ReplyPayload>;
export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null;
    _min: ReplyMinAggregateOutputType | null;
    _max: ReplyMaxAggregateOutputType | null;
};
export type ReplyMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    content: string | null;
    by_profile_id: string | null;
    is_visible: boolean | null;
    to_comment_id: string | null;
};
export type ReplyMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    content: string | null;
    by_profile_id: string | null;
    is_visible: boolean | null;
    to_comment_id: string | null;
};
export type ReplyCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    content: number;
    by_profile_id: number;
    is_visible: number;
    to_comment_id: number;
    _all: number;
};
export type ReplyMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    content?: true;
    by_profile_id?: true;
    is_visible?: true;
    to_comment_id?: true;
};
export type ReplyMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    content?: true;
    by_profile_id?: true;
    is_visible?: true;
    to_comment_id?: true;
};
export type ReplyCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    content?: true;
    by_profile_id?: true;
    is_visible?: true;
    to_comment_id?: true;
    _all?: true;
};
export type ReplyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyWhereInput;
    orderBy?: Prisma.ReplyOrderByWithRelationInput | Prisma.ReplyOrderByWithRelationInput[];
    cursor?: Prisma.ReplyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReplyCountAggregateInputType;
    _min?: ReplyMinAggregateInputType;
    _max?: ReplyMaxAggregateInputType;
};
export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
    [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReply[P]> : Prisma.GetScalarType<T[P], AggregateReply[P]>;
};
export type ReplyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyWhereInput;
    orderBy?: Prisma.ReplyOrderByWithAggregationInput | Prisma.ReplyOrderByWithAggregationInput[];
    by: Prisma.ReplyScalarFieldEnum[] | Prisma.ReplyScalarFieldEnum;
    having?: Prisma.ReplyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReplyCountAggregateInputType | true;
    _min?: ReplyMinAggregateInputType;
    _max?: ReplyMaxAggregateInputType;
};
export type ReplyGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    content: string;
    by_profile_id: string;
    is_visible: boolean;
    to_comment_id: string;
    _count: ReplyCountAggregateOutputType | null;
    _min: ReplyMinAggregateOutputType | null;
    _max: ReplyMaxAggregateOutputType | null;
};
type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReplyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReplyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReplyGroupByOutputType[P]>;
}>>;
export type ReplyWhereInput = {
    AND?: Prisma.ReplyWhereInput | Prisma.ReplyWhereInput[];
    OR?: Prisma.ReplyWhereInput[];
    NOT?: Prisma.ReplyWhereInput | Prisma.ReplyWhereInput[];
    id?: Prisma.StringFilter<"Reply"> | string;
    created_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    content?: Prisma.StringFilter<"Reply"> | string;
    by_profile_id?: Prisma.StringFilter<"Reply"> | string;
    is_visible?: Prisma.BoolFilter<"Reply"> | boolean;
    to_comment_id?: Prisma.StringFilter<"Reply"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    to_comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
    ratings?: Prisma.ReplyVoteListRelationFilter;
};
export type ReplyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    is_visible?: Prisma.SortOrder;
    to_comment_id?: Prisma.SortOrder;
    by_profile?: Prisma.ProfileOrderByWithRelationInput;
    to_comment?: Prisma.CommentOrderByWithRelationInput;
    ratings?: Prisma.ReplyVoteOrderByRelationAggregateInput;
};
export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReplyWhereInput | Prisma.ReplyWhereInput[];
    OR?: Prisma.ReplyWhereInput[];
    NOT?: Prisma.ReplyWhereInput | Prisma.ReplyWhereInput[];
    created_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    content?: Prisma.StringFilter<"Reply"> | string;
    by_profile_id?: Prisma.StringFilter<"Reply"> | string;
    is_visible?: Prisma.BoolFilter<"Reply"> | boolean;
    to_comment_id?: Prisma.StringFilter<"Reply"> | string;
    by_profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    to_comment?: Prisma.XOR<Prisma.CommentScalarRelationFilter, Prisma.CommentWhereInput>;
    ratings?: Prisma.ReplyVoteListRelationFilter;
}, "id">;
export type ReplyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    is_visible?: Prisma.SortOrder;
    to_comment_id?: Prisma.SortOrder;
    _count?: Prisma.ReplyCountOrderByAggregateInput;
    _max?: Prisma.ReplyMaxOrderByAggregateInput;
    _min?: Prisma.ReplyMinOrderByAggregateInput;
};
export type ReplyScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReplyScalarWhereWithAggregatesInput | Prisma.ReplyScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReplyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReplyScalarWhereWithAggregatesInput | Prisma.ReplyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Reply"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Reply"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Reply"> | Date | string;
    content?: Prisma.StringWithAggregatesFilter<"Reply"> | string;
    by_profile_id?: Prisma.StringWithAggregatesFilter<"Reply"> | string;
    is_visible?: Prisma.BoolWithAggregatesFilter<"Reply"> | boolean;
    to_comment_id?: Prisma.StringWithAggregatesFilter<"Reply"> | string;
};
export type ReplyCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutReplies_to_commentInput;
    to_comment: Prisma.CommentCreateNestedOneWithoutRepliesInput;
    ratings?: Prisma.ReplyVoteCreateNestedManyWithoutReplyInput;
};
export type ReplyUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    by_profile_id: string;
    is_visible?: boolean;
    to_comment_id: string;
    ratings?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutReplyInput;
};
export type ReplyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutReplies_to_commentNestedInput;
    to_comment?: Prisma.CommentUpdateOneRequiredWithoutRepliesNestedInput;
    ratings?: Prisma.ReplyVoteUpdateManyWithoutReplyNestedInput;
};
export type ReplyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratings?: Prisma.ReplyVoteUncheckedUpdateManyWithoutReplyNestedInput;
};
export type ReplyCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    by_profile_id: string;
    is_visible?: boolean;
    to_comment_id: string;
};
export type ReplyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReplyListRelationFilter = {
    every?: Prisma.ReplyWhereInput;
    some?: Prisma.ReplyWhereInput;
    none?: Prisma.ReplyWhereInput;
};
export type ReplyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReplyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    is_visible?: Prisma.SortOrder;
    to_comment_id?: Prisma.SortOrder;
};
export type ReplyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    is_visible?: Prisma.SortOrder;
    to_comment_id?: Prisma.SortOrder;
};
export type ReplyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    by_profile_id?: Prisma.SortOrder;
    is_visible?: Prisma.SortOrder;
    to_comment_id?: Prisma.SortOrder;
};
export type ReplyScalarRelationFilter = {
    is?: Prisma.ReplyWhereInput;
    isNot?: Prisma.ReplyWhereInput;
};
export type ReplyCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyCreateWithoutBy_profileInput[] | Prisma.ReplyUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutBy_profileInput | Prisma.ReplyCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.ReplyCreateManyBy_profileInputEnvelope;
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
};
export type ReplyUncheckedCreateNestedManyWithoutBy_profileInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyCreateWithoutBy_profileInput[] | Prisma.ReplyUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutBy_profileInput | Prisma.ReplyCreateOrConnectWithoutBy_profileInput[];
    createMany?: Prisma.ReplyCreateManyBy_profileInputEnvelope;
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
};
export type ReplyUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyCreateWithoutBy_profileInput[] | Prisma.ReplyUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutBy_profileInput | Prisma.ReplyCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.ReplyUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.ReplyCreateManyBy_profileInputEnvelope;
    set?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    disconnect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    delete?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    update?: Prisma.ReplyUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.ReplyUpdateManyWithWhereWithoutBy_profileInput | Prisma.ReplyUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
};
export type ReplyUncheckedUpdateManyWithoutBy_profileNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput> | Prisma.ReplyCreateWithoutBy_profileInput[] | Prisma.ReplyUncheckedCreateWithoutBy_profileInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutBy_profileInput | Prisma.ReplyCreateOrConnectWithoutBy_profileInput[];
    upsert?: Prisma.ReplyUpsertWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyUpsertWithWhereUniqueWithoutBy_profileInput[];
    createMany?: Prisma.ReplyCreateManyBy_profileInputEnvelope;
    set?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    disconnect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    delete?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    update?: Prisma.ReplyUpdateWithWhereUniqueWithoutBy_profileInput | Prisma.ReplyUpdateWithWhereUniqueWithoutBy_profileInput[];
    updateMany?: Prisma.ReplyUpdateManyWithWhereWithoutBy_profileInput | Prisma.ReplyUpdateManyWithWhereWithoutBy_profileInput[];
    deleteMany?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
};
export type ReplyCreateNestedManyWithoutTo_commentInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput> | Prisma.ReplyCreateWithoutTo_commentInput[] | Prisma.ReplyUncheckedCreateWithoutTo_commentInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutTo_commentInput | Prisma.ReplyCreateOrConnectWithoutTo_commentInput[];
    createMany?: Prisma.ReplyCreateManyTo_commentInputEnvelope;
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
};
export type ReplyUncheckedCreateNestedManyWithoutTo_commentInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput> | Prisma.ReplyCreateWithoutTo_commentInput[] | Prisma.ReplyUncheckedCreateWithoutTo_commentInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutTo_commentInput | Prisma.ReplyCreateOrConnectWithoutTo_commentInput[];
    createMany?: Prisma.ReplyCreateManyTo_commentInputEnvelope;
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
};
export type ReplyUpdateManyWithoutTo_commentNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput> | Prisma.ReplyCreateWithoutTo_commentInput[] | Prisma.ReplyUncheckedCreateWithoutTo_commentInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutTo_commentInput | Prisma.ReplyCreateOrConnectWithoutTo_commentInput[];
    upsert?: Prisma.ReplyUpsertWithWhereUniqueWithoutTo_commentInput | Prisma.ReplyUpsertWithWhereUniqueWithoutTo_commentInput[];
    createMany?: Prisma.ReplyCreateManyTo_commentInputEnvelope;
    set?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    disconnect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    delete?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    update?: Prisma.ReplyUpdateWithWhereUniqueWithoutTo_commentInput | Prisma.ReplyUpdateWithWhereUniqueWithoutTo_commentInput[];
    updateMany?: Prisma.ReplyUpdateManyWithWhereWithoutTo_commentInput | Prisma.ReplyUpdateManyWithWhereWithoutTo_commentInput[];
    deleteMany?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
};
export type ReplyUncheckedUpdateManyWithoutTo_commentNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput> | Prisma.ReplyCreateWithoutTo_commentInput[] | Prisma.ReplyUncheckedCreateWithoutTo_commentInput[];
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutTo_commentInput | Prisma.ReplyCreateOrConnectWithoutTo_commentInput[];
    upsert?: Prisma.ReplyUpsertWithWhereUniqueWithoutTo_commentInput | Prisma.ReplyUpsertWithWhereUniqueWithoutTo_commentInput[];
    createMany?: Prisma.ReplyCreateManyTo_commentInputEnvelope;
    set?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    disconnect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    delete?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    connect?: Prisma.ReplyWhereUniqueInput | Prisma.ReplyWhereUniqueInput[];
    update?: Prisma.ReplyUpdateWithWhereUniqueWithoutTo_commentInput | Prisma.ReplyUpdateWithWhereUniqueWithoutTo_commentInput[];
    updateMany?: Prisma.ReplyUpdateManyWithWhereWithoutTo_commentInput | Prisma.ReplyUpdateManyWithWhereWithoutTo_commentInput[];
    deleteMany?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
};
export type ReplyCreateNestedOneWithoutRatingsInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutRatingsInput, Prisma.ReplyUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutRatingsInput;
    connect?: Prisma.ReplyWhereUniqueInput;
};
export type ReplyUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: Prisma.XOR<Prisma.ReplyCreateWithoutRatingsInput, Prisma.ReplyUncheckedCreateWithoutRatingsInput>;
    connectOrCreate?: Prisma.ReplyCreateOrConnectWithoutRatingsInput;
    upsert?: Prisma.ReplyUpsertWithoutRatingsInput;
    connect?: Prisma.ReplyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReplyUpdateToOneWithWhereWithoutRatingsInput, Prisma.ReplyUpdateWithoutRatingsInput>, Prisma.ReplyUncheckedUpdateWithoutRatingsInput>;
};
export type ReplyCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    to_comment: Prisma.CommentCreateNestedOneWithoutRepliesInput;
    ratings?: Prisma.ReplyVoteCreateNestedManyWithoutReplyInput;
};
export type ReplyUncheckedCreateWithoutBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    to_comment_id: string;
    ratings?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutReplyInput;
};
export type ReplyCreateOrConnectWithoutBy_profileInput = {
    where: Prisma.ReplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput>;
};
export type ReplyCreateManyBy_profileInputEnvelope = {
    data: Prisma.ReplyCreateManyBy_profileInput | Prisma.ReplyCreateManyBy_profileInput[];
    skipDuplicates?: boolean;
};
export type ReplyUpsertWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.ReplyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplyUpdateWithoutBy_profileInput, Prisma.ReplyUncheckedUpdateWithoutBy_profileInput>;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutBy_profileInput, Prisma.ReplyUncheckedCreateWithoutBy_profileInput>;
};
export type ReplyUpdateWithWhereUniqueWithoutBy_profileInput = {
    where: Prisma.ReplyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplyUpdateWithoutBy_profileInput, Prisma.ReplyUncheckedUpdateWithoutBy_profileInput>;
};
export type ReplyUpdateManyWithWhereWithoutBy_profileInput = {
    where: Prisma.ReplyScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplyUpdateManyMutationInput, Prisma.ReplyUncheckedUpdateManyWithoutBy_profileInput>;
};
export type ReplyScalarWhereInput = {
    AND?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
    OR?: Prisma.ReplyScalarWhereInput[];
    NOT?: Prisma.ReplyScalarWhereInput | Prisma.ReplyScalarWhereInput[];
    id?: Prisma.StringFilter<"Reply"> | string;
    created_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Reply"> | Date | string;
    content?: Prisma.StringFilter<"Reply"> | string;
    by_profile_id?: Prisma.StringFilter<"Reply"> | string;
    is_visible?: Prisma.BoolFilter<"Reply"> | boolean;
    to_comment_id?: Prisma.StringFilter<"Reply"> | string;
};
export type ReplyCreateWithoutTo_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutReplies_to_commentInput;
    ratings?: Prisma.ReplyVoteCreateNestedManyWithoutReplyInput;
};
export type ReplyUncheckedCreateWithoutTo_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    by_profile_id: string;
    is_visible?: boolean;
    ratings?: Prisma.ReplyVoteUncheckedCreateNestedManyWithoutReplyInput;
};
export type ReplyCreateOrConnectWithoutTo_commentInput = {
    where: Prisma.ReplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput>;
};
export type ReplyCreateManyTo_commentInputEnvelope = {
    data: Prisma.ReplyCreateManyTo_commentInput | Prisma.ReplyCreateManyTo_commentInput[];
    skipDuplicates?: boolean;
};
export type ReplyUpsertWithWhereUniqueWithoutTo_commentInput = {
    where: Prisma.ReplyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReplyUpdateWithoutTo_commentInput, Prisma.ReplyUncheckedUpdateWithoutTo_commentInput>;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutTo_commentInput, Prisma.ReplyUncheckedCreateWithoutTo_commentInput>;
};
export type ReplyUpdateWithWhereUniqueWithoutTo_commentInput = {
    where: Prisma.ReplyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReplyUpdateWithoutTo_commentInput, Prisma.ReplyUncheckedUpdateWithoutTo_commentInput>;
};
export type ReplyUpdateManyWithWhereWithoutTo_commentInput = {
    where: Prisma.ReplyScalarWhereInput;
    data: Prisma.XOR<Prisma.ReplyUpdateManyMutationInput, Prisma.ReplyUncheckedUpdateManyWithoutTo_commentInput>;
};
export type ReplyCreateWithoutRatingsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    by_profile: Prisma.ProfileCreateNestedOneWithoutReplies_to_commentInput;
    to_comment: Prisma.CommentCreateNestedOneWithoutRepliesInput;
};
export type ReplyUncheckedCreateWithoutRatingsInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    by_profile_id: string;
    is_visible?: boolean;
    to_comment_id: string;
};
export type ReplyCreateOrConnectWithoutRatingsInput = {
    where: Prisma.ReplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutRatingsInput, Prisma.ReplyUncheckedCreateWithoutRatingsInput>;
};
export type ReplyUpsertWithoutRatingsInput = {
    update: Prisma.XOR<Prisma.ReplyUpdateWithoutRatingsInput, Prisma.ReplyUncheckedUpdateWithoutRatingsInput>;
    create: Prisma.XOR<Prisma.ReplyCreateWithoutRatingsInput, Prisma.ReplyUncheckedCreateWithoutRatingsInput>;
    where?: Prisma.ReplyWhereInput;
};
export type ReplyUpdateToOneWithWhereWithoutRatingsInput = {
    where?: Prisma.ReplyWhereInput;
    data: Prisma.XOR<Prisma.ReplyUpdateWithoutRatingsInput, Prisma.ReplyUncheckedUpdateWithoutRatingsInput>;
};
export type ReplyUpdateWithoutRatingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutReplies_to_commentNestedInput;
    to_comment?: Prisma.CommentUpdateOneRequiredWithoutRepliesNestedInput;
};
export type ReplyUncheckedUpdateWithoutRatingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReplyCreateManyBy_profileInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    is_visible?: boolean;
    to_comment_id: string;
};
export type ReplyUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment?: Prisma.CommentUpdateOneRequiredWithoutRepliesNestedInput;
    ratings?: Prisma.ReplyVoteUpdateManyWithoutReplyNestedInput;
};
export type ReplyUncheckedUpdateWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ratings?: Prisma.ReplyVoteUncheckedUpdateManyWithoutReplyNestedInput;
};
export type ReplyUncheckedUpdateManyWithoutBy_profileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    to_comment_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReplyCreateManyTo_commentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    content: string;
    by_profile_id: string;
    is_visible?: boolean;
};
export type ReplyUpdateWithoutTo_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    by_profile?: Prisma.ProfileUpdateOneRequiredWithoutReplies_to_commentNestedInput;
    ratings?: Prisma.ReplyVoteUpdateManyWithoutReplyNestedInput;
};
export type ReplyUncheckedUpdateWithoutTo_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ratings?: Prisma.ReplyVoteUncheckedUpdateManyWithoutReplyNestedInput;
};
export type ReplyUncheckedUpdateManyWithoutTo_commentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    by_profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    is_visible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ReplyCountOutputType = {
    ratings: number;
};
export type ReplyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ratings?: boolean | ReplyCountOutputTypeCountRatingsArgs;
};
export type ReplyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplyCountOutputTypeSelect<ExtArgs> | null;
};
export type ReplyCountOutputTypeCountRatingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyVoteWhereInput;
};
export type ReplySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    content?: boolean;
    by_profile_id?: boolean;
    is_visible?: boolean;
    to_comment_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    ratings?: boolean | Prisma.Reply$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReplyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reply"]>;
export type ReplySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    content?: boolean;
    by_profile_id?: boolean;
    is_visible?: boolean;
    to_comment_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reply"]>;
export type ReplySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    content?: boolean;
    by_profile_id?: boolean;
    is_visible?: boolean;
    to_comment_id?: boolean;
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reply"]>;
export type ReplySelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    content?: boolean;
    by_profile_id?: boolean;
    is_visible?: boolean;
    to_comment_id?: boolean;
};
export type ReplyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at" | "content" | "by_profile_id" | "is_visible" | "to_comment_id", ExtArgs["result"]["reply"]>;
export type ReplyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
    ratings?: boolean | Prisma.Reply$ratingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReplyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReplyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type ReplyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    by_profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    to_comment?: boolean | Prisma.CommentDefaultArgs<ExtArgs>;
};
export type $ReplyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reply";
    objects: {
        by_profile: Prisma.$ProfilePayload<ExtArgs>;
        to_comment: Prisma.$CommentPayload<ExtArgs>;
        ratings: Prisma.$ReplyVotePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        by_profile_id: string;
        is_visible: boolean;
        to_comment_id: string;
    }, ExtArgs["result"]["reply"]>;
    composites: {};
};
export type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReplyPayload, S>;
export type ReplyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReplyCountAggregateInputType | true;
};
export interface ReplyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reply'];
        meta: {
            name: 'Reply';
        };
    };
    findUnique<T extends ReplyFindUniqueArgs>(args: Prisma.SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReplyFindFirstArgs>(args?: Prisma.SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReplyFindManyArgs>(args?: Prisma.SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReplyCreateArgs>(args: Prisma.SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReplyCreateManyArgs>(args?: Prisma.SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReplyDeleteArgs>(args: Prisma.SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReplyUpdateArgs>(args: Prisma.SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReplyDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReplyUpdateManyArgs>(args: Prisma.SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReplyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReplyUpsertArgs>(args: Prisma.SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma.Prisma__ReplyClient<runtime.Types.Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReplyCountArgs>(args?: Prisma.Subset<T, ReplyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReplyCountAggregateOutputType> : number>;
    aggregate<T extends ReplyAggregateArgs>(args: Prisma.Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>;
    groupBy<T extends ReplyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReplyGroupByArgs['orderBy'];
    } : {
        orderBy?: ReplyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReplyFieldRefs;
}
export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    by_profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    to_comment<T extends Prisma.CommentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommentDefaultArgs<ExtArgs>>): Prisma.Prisma__CommentClient<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    ratings<T extends Prisma.Reply$ratingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reply$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReplyVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReplyFieldRefs {
    readonly id: Prisma.FieldRef<"Reply", 'String'>;
    readonly created_at: Prisma.FieldRef<"Reply", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Reply", 'DateTime'>;
    readonly content: Prisma.FieldRef<"Reply", 'String'>;
    readonly by_profile_id: Prisma.FieldRef<"Reply", 'String'>;
    readonly is_visible: Prisma.FieldRef<"Reply", 'Boolean'>;
    readonly to_comment_id: Prisma.FieldRef<"Reply", 'String'>;
}
export type ReplyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    where: Prisma.ReplyWhereUniqueInput;
};
export type ReplyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    where: Prisma.ReplyWhereUniqueInput;
};
export type ReplyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyCreateInput, Prisma.ReplyUncheckedCreateInput>;
};
export type ReplyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReplyCreateManyInput | Prisma.ReplyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReplyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    data: Prisma.ReplyCreateManyInput | Prisma.ReplyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReplyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReplyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyUpdateInput, Prisma.ReplyUncheckedUpdateInput>;
    where: Prisma.ReplyWhereUniqueInput;
};
export type ReplyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReplyUpdateManyMutationInput, Prisma.ReplyUncheckedUpdateManyInput>;
    where?: Prisma.ReplyWhereInput;
    limit?: number;
};
export type ReplyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReplyUpdateManyMutationInput, Prisma.ReplyUncheckedUpdateManyInput>;
    where?: Prisma.ReplyWhereInput;
    limit?: number;
    include?: Prisma.ReplyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReplyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    where: Prisma.ReplyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReplyCreateInput, Prisma.ReplyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReplyUpdateInput, Prisma.ReplyUncheckedUpdateInput>;
};
export type ReplyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
    where: Prisma.ReplyWhereUniqueInput;
};
export type ReplyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReplyWhereInput;
    limit?: number;
};
export type Reply$ratingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReplyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReplySelect<ExtArgs> | null;
    omit?: Prisma.ReplyOmit<ExtArgs> | null;
    include?: Prisma.ReplyInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Reply.d.ts.map